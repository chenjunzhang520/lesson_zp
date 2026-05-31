import React, { useState, useRef, useEffect } from 'react';

const PhotoUploader = ({ photos, setPhotos, places }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map((file, index) => ({
      id: Date.now() + index,
      file: file,
      url: URL.createObjectURL(file),
      place: ''
    }));
    setPhotos([...photos, ...newPhotos]);
  };

  const removePhoto = (photoId) => {
    const photoToRemove = photos.find(photo => photo.id === photoId);
    if (photoToRemove) {
      URL.revokeObjectURL(photoToRemove.url);
    }
    setPhotos(photos.filter(photo => photo.id !== photoId));
  };

  const updatePhotoPlace = (photoId, place) => {
    setPhotos(photos.map(photo => 
      photo.id === photoId ? { ...photo, place } : photo
    ));
  };

  // 组件卸载时释放所有 ObjectURL
  useEffect(() => {
    return () => {
      photos.forEach(photo => URL.revokeObjectURL(photo.url));
    };
  }, [photos]);

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => fileInputRef.current.click()}
          className="btn-primary"
        >
          上传照片
        </button>
        <input
          type="file"
          ref={fileInputRef}
          multiple
          accept="image/jpeg,image/png"
          onChange={handleFileChange}
          className="hidden"
        />
        <span className="text-sm text-gray-500 dark:text-gray-400">
          已上传 {photos.length} 张照片
        </span>
      </div>

      {photos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group">
              <img
                src={photo.url}
                alt="上传预览"
                className="w-full h-24 object-cover rounded-lg"
              />
              <button
                onClick={() => removePhoto(photo.id)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ×
              </button>
              {places.length > 0 && (
                <select
                  value={photo.place}
                  onChange={(e) => updatePhotoPlace(photo.id, e.target.value)}
                  className="absolute bottom-1 left-1 right-1 text-xs bg-white/80 dark:bg-gray-800/80 rounded px-2 py-1 border border-gray-300 dark:border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <option value="">无关联地点</option>
                  {places.map((place, index) => (
                    <option key={index} value={place}>{place}</option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;