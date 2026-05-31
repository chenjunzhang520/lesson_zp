import React from 'react';
import CopyButton from './CopyButton';

const SuggestionCard = ({ suggestion, styleName }) => {
  return (
    <div className="card mb-4 fade-in">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
          {styleName}
        </span>
        <CopyButton text={suggestion} />
      </div>
      <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
        {suggestion}
      </div>
    </div>
  );
};

export default SuggestionCard;