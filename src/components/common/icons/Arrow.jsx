import React from 'react';

const Arrow = ({ titleTag = 'Arrow', width = 30, fill = '#000', direction = 'right' }) => {

  const degree = {
    'left': 90,
    'right': -90,
    'up': -180,
    'down': 0
  };
  const arrowDirection = `translate(379 210), rotate(${degree[direction]})`;

  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-944 188 34 34"
    style={{
      width
    }}>
    {titleTag && <title>{titleTag}</title>}
    <g transform="translate(-1323 -22)">
      <g
        transform={arrowDirection}
        transform-origin="50% 50%"
        >
      <path
        d="M2274.83-12244.371l-4.769-4.77a.5.5,0,0,1,0-.707.5.5,0,0,1,.354-.146.5.5,0,0,1,.354.146l4.268,4.268V-12260a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5v14.419l4.268-4.268a.5.5,0,0,1,.354-.146.5.5,0,0,1,.354.146.5.5,0,0,1,0,.707l-4.769,4.77-.182.182-.02.02-.506.5Z"
        fill={fill}
        transform="translate(-2258.536 12269)"></path>
      </g>
    </g>
  </svg>
)};

export default Arrow;

// usage:
// <Arrow direction="left" width={50}/>
// <Arrow direction="down" fill="black"/>