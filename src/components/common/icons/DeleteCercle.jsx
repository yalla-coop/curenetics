import React from 'react';

const DeleteCercle = ({ width = 25, fill = '#35348f', height = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.70312" cy="7.30493" r="6.5" stroke="#F05358" />
      <line
        x1="5.05668"
        y1="4.95138"
        x2="10.0567"
        y2="9.95138"
        stroke="#F05358"
      />
      <line
        x1="5.00582"
        y1="9.95138"
        x2="10.0058"
        y2="4.95138"
        stroke="#F05358"
      />
    </svg>
  );
};

export default DeleteCercle;
