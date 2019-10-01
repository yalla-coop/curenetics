import React from 'react';

const Chevron = ({ titleTag = 'Chevron', width = 14, fill = '#939598', direction = 'left' }) => {

  const degree = {
    'left': 0,
    'right': 180,
    'up': 90,
    'down': -90
  };
  const arrowDirection = `rotate(${degree[direction]})`;

  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 25"
    style={{
      width
    }}>
    {titleTag && <title>{titleTag}</title>}
    <g
      transform={arrowDirection}
      transform-origin="50% 50%"
      >
      <path
        fill={fill}
        d="M13.7143 4.33763L5.14286 12.9091L13.7143 21.4805L12 24.9091L0 12.9091L12 0.909058L13.7143 4.33763Z" />
    </g>
  </svg>
)};

export default Chevron;