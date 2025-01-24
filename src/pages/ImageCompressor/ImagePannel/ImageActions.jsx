import React from "react";

const ImageActions = ({ handleCrop, handleUndo, handleRedo, handleReset, handleSave, croppedImage }) => {
  return (
    <div className="flex justify-center gap-8 mt-4">
      <button
        className="flex flex-col items-center gap-1 text-gray-700 hover:text-white bg-blue-100 hover:bg-blue-500 px-5 py-1 rounded-md border border-gray-300 shadow-sm transition-all duration-200 ease-in-out"
        onClick={handleCrop}
      >
        <span>Crop</span>
      </button>
      <button
        className="flex flex-col items-center gap-1 text-gray-700 hover:text-white bg-blue-100 hover:bg-blue-500 px-5 py-1 rounded-md border border-gray-300 shadow-sm transition-all duration-200 ease-in-out"
        onClick={handleUndo}
      >
        <span>Undo</span>
      </button>
      <button
        className="flex flex-col items-center gap-1 text-gray-700 hover:text-white bg-blue-100 hover:bg-blue-500 px-5 py-1 rounded-md border border-gray-300 shadow-sm transition-all duration-200 ease-in-out"
        onClick={handleRedo}
      >
        <span>Redo</span>
      </button>
      <button
        className="flex flex-col items-center gap-1 text-gray-700 hover:text-white bg-blue-100 hover:bg-blue-500 px-5 py-1 rounded-md border border-gray-300 shadow-sm transition-all duration-200 ease-in-out"
        onClick={handleReset}
      >
        <span>Reset</span>
      </button>
      <button
        className="flex flex-col items-center gap-1 text-gray-700 hover:text-white bg-blue-100 hover:bg-blue-500 px-5 py-1 rounded-md border border-gray-300 shadow-sm transition-all duration-200 ease-in-out"
        onClick={handleSave}
        disabled={!croppedImage}
      >
        <span>Save</span>
      </button>
    </div>
  );
};

export default ImageActions;