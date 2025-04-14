import React from "react";
import "./collectionCard.css";

const CollectionCard = ({ image, name, description, id, variant }) => {
  const variantClass =
    variant === "primary" ? "primary-card" : "secondary-card";
  return (
    <div className="collection-card-container">
      <img
        className={`${variantClass} collection-card-image`}
        src={image}
        alt={id}
      />
      <div className="collection-card-description-container">
        <span className="collection-card-name">{name}</span>
        <span className="collection-card-description">{description}</span>
      </div>
    </div>
  );
};

export default CollectionCard;
