import React from "react";

const CropControls = ({ crop, handleWidthChange, handleHeightChange, handlePositionXChange, handlePositionYChange, handleCropOptionChange, cropOption, imageProperties, formatFileSize }) => {
  return (
    <div className="w-full md:w-72 bg-white rounded-sm p-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Resizing Options</h2>
      {/* Width/Height Controls */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-gray-600 mb-1">Width:</label>
          <input
            type="number"
            value={crop.width ? Math.round(crop.width) : ""}
            className="w-full p-2 border rounded outline-none"
            onChange={handleWidthChange}
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Height:</label>
          <input
            type="number"
            value={crop.height ? Math.round(crop.height) : ""}
            className="w-full p-2 border rounded outline-none"
            onChange={handleHeightChange}
          />
        </div>
      </div>
      {/* Crop Options */}
      <div className="mb-7">
        <label className="block text-gray-600 mb-1">Crop Option:</label>
        <select
          className="w-full p-2 border rounded outline-none"
          value={cropOption}
          onChange={(e) => handleCropOptionChange(e.target.value)}
        >
          <option value="Full">Full</option>
          <option value="Half">Half</option>
          <option value="Square">Square</option>
          <option value="4:4">4:4</option>
          <option value="5:4">5:4</option>
        </select>
      </div>
      {/* Crop Position */}
      <div className="mb-5">
        <h3 className="font-semibold mb13">Crop Position</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-1">Position (X)</label>
            <input
              type="number"
              value={Math.round(crop.x) || 0}
              className="w-full p-2 border rounded outline-none"
              onChange={handlePositionXChange}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Position (Y)</label>
            <input
              type="number"
              value={Math.round(crop.y) || 0}
              className="w-full p-2 border rounded outline-none"
              onChange={handlePositionYChange}
            />
          </div>
        </div>
      </div>
      {/* Image Info */}
      <div className="bg-gray-50 p-1 rounded">
        <div className="text-sm">
          Current: {Math.round(crop.width) || 0} x {Math.round(crop.height) || 0},{" "}
          {formatFileSize((crop.width * crop.height * 3) / 1024) || "0 Bytes"},{" "}
          {imageProperties.type || "JPEG"}
        </div>
        <div className="text-sm">
          Original: {imageProperties.width || 0} x {imageProperties.height || 0},{" "}
          {formatFileSize(imageProperties.size) || "0 Bytes"}, {imageProperties.type || "JPEG"}
        </div>
      </div>
    </div>
  );
};

export default CropControls;