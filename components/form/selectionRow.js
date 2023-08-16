import React, { useState } from 'react';
import ImageCard from './ImageCard';

const SelectionRow = ({ images }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleSelect = (title) => {
    setSelectedImages([...selectedImages, title]);
  };

  return (
    <div className="selection-row">
      {images.map((image, index) => (
        <ImageCard key={index} image={image} onSelect={handleSelect} />
      ))}
      <div>Selected Images: {selectedImages.join(', ')}</div>
    </div>
  );
};

export default SelectionRow;
