import React, { useState } from "react";

const Card = ({ src, handleClick, index }) => {
  const { id, imgSrc, status } = src;

  return (
    <>
      <div
        className={`my-card d-flex align-items-center justify-content-center ${
          status === "active"
            ? "active"
            : status === "active correct"
            ? "active correct"
            : status === "active wrong"
            ? "active wrong"
            : ""
        }`}
        onClick={() => {
          handleClick(index, id);
        }}
      >
        <img src={imgSrc} alt="pokemon" />
      </div>
    </>
  );
};

export default Card;
