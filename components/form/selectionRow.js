import React, { useState } from 'react';
import ImageCard from './imageCard';

const SelectionRow = ({ images, onSelect }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]?.title);

  const handleSelect = (e) => {
    console.log('e: ', e , e?.target, e?.target?.value, e?.value)
    setSelectedImage(e)
    onSelect(e)
  }

  return (
    <div className="selection-row flex ">
      {images.map((image, index) => (
        <ImageCard key={index} image={image} onSelect={handleSelect} selected={selectedImage === image.title}/>
      ))}
    </div>
  );
};

export default SelectionRow;
