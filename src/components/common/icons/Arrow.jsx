import React from 'react';

const Arrow = ({
  titleTag = 'Arrow', width = 30, fill = '#35348f', direction = 'down',
}) => {
  const degree = {
    left: 90,
    right: -90,
    up: -180,
    down: 0,
  };
  const arrowDirection = `translate(379 210), rotate(${degree[direction]})`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-944 179 34 34"
      width={width}
    >
      {titleTag && <title>{titleTag}</title>}
      <g transform="translate(-1323 -22)">
        <g
          transform={arrowDirection}
          transform-origin="50% 50%"
        >
          <path d="M30.961 8.20711C31.3515 7.81658 31.3515 7.18342 30.961 6.79289L24.5971 0.428932C24.2065 0.0384078 23.5734 0.0384078 23.1828 0.428932C22.7923 0.819457 22.7923 1.45262 23.1828 1.84315L28.8397 7.5L23.1828 13.1569C22.7923 13.5474 22.7923 14.1805 23.1828 14.5711C23.5734 14.9616 24.2065 14.9616 24.5971 14.5711L30.961 8.20711ZM0.253906 8.5H30.2539V6.5H0.253906V8.5Z" fill="#35348F" />
        </g>
      </g>
    </svg>
  );
};

export default Arrow;
