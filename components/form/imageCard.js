import React from 'react';

const ImageCard = ({ image, onSelect }) => {
  return (
    <div className="image-card" onClick={() => onSelect(image.title)}>
      <img src={image.url} alt={image.title} />
      <div>{image.title}</div>
    </div>
  );
};

export default ImageCard;
