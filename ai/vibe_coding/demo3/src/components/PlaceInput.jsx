import React, { useState } from 'react';

const PlaceInput = ({ places, setPlaces }) => {
  const [inputValue, setInputValue] = useState('');

  const addPlace = () => {
    if (inputValue.trim() && !places.includes(inputValue.trim())) {
      setPlaces([...places, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removePlace = (placeToRemove) => {
    setPlaces(places.filter(place => place !== placeToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addPlace();
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="输入地点（回车或点击添加）"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          onClick={addPlace}
          className="btn-primary"
        >
          添加
        </button>
      </div>
      
      {places.length > 0 && (
        <div className="flex flex-wrap">
          {places.map((place, index) => (
            <div key={index} className="tag">
              {place}
              <button
                onClick={() => removePlace(place)}
                className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaceInput;