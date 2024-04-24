import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-t-4 border-b-4 border-gray-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingIndicator;
