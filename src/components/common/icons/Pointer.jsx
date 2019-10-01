import React from 'react';

const Pointer = ({ titleTag = 'Pointer', width = 12, fill = '#35348f', direction = 'up' }) => {

  const degree = {
    'left': -90,
    'right': 90,
    'up': 0,
    'down': 180
  };
  const arrowDirection = `rotate(${degree[direction]})`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 10"
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
          d="M5.13397 0.5C5.51887 -0.166667 6.48112 -0.166666 6.86602 0.5L11.1962 8C11.5811 8.66667 11.0999 9.5 10.3301 9.5H1.66987C0.900073 9.5 0.418947 8.66667 0.803848 8L5.13397 0.5Z" />
      </g>
    </svg>
  );
};

export default Pointer;