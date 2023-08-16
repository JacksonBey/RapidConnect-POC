import React from 'react';
import Image from 'next/image';

const ImageCard = ({ image, onSelect, selected }) => {
  return (
    <div className="image-card" onClick={() => onSelect(image.title)} style={selected ? {backgroundColor: "red"} : {backgroundColor: "blue"}}>
      <Image src={image.url} alt={image.title} height={200} width={200} />
      <div>{image.title}</div>
    </div>
  );
};

export default ImageCard;
