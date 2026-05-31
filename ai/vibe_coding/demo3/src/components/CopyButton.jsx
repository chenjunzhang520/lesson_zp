import React, { useState } from 'react';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md text-sm transition-colors duration-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
      >
        {copied ? '已复制！' : '复制'}
      </button>
      {copied && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg animate-fadeIn dark:bg-gray-700">
          已复制到剪贴板
        </div>
      )}
    </div>
  );
};

export default CopyButton;