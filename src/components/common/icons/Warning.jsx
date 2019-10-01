import React from 'react';

const Warning = ({ titleTag = 'Warning', width = 40, fill = '#f89e51', addOutine = null }) => {
  
  const baseScale = width / 40;
  const outline = `scale(${baseScale * 0.75}) translate(23 10)`;
  const plain = `scale(${baseScale}) translate(16.75 7.5)`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${width}`}
      style={{
        width
      }}>
      {titleTag && <title>{titleTag}</title>}
      <path
        fill={fill}
        transform={addOutine ? outline : plain}
        d="M5.96 0.079998V11.52C5.96 12.7333 5.9 13.9267 5.78 15.1C5.66 16.26 5.50667 17.4933 5.32 18.8H1.96C1.77333 17.4933 1.62 16.26 1.5 15.1C1.38 13.9267 1.32 12.7333 1.32 11.52V0.079998H5.96ZM0.54 26.28C0.54 25.8667 0.613333 25.4733 0.76 25.1C0.92 24.7267 1.13333 24.4067 1.4 24.14C1.68 23.8733 2.00667 23.66 2.38 23.5C2.75333 23.34 3.15333 23.26 3.58 23.26C3.99333 23.26 4.38667 23.34 4.76 23.5C5.13333 23.66 5.45333 23.8733 5.72 24.14C6 24.4067 6.22 24.7267 6.38 25.1C6.54 25.4733 6.62 25.8667 6.62 26.28C6.62 26.7067 6.54 27.1067 6.38 27.48C6.22 27.84 6 28.1533 5.72 28.42C5.45333 28.6867 5.13333 28.8933 4.76 29.04C4.38667 29.2 3.99333 29.28 3.58 29.28C3.15333 29.28 2.75333 29.2 2.38 29.04C2.00667 28.8933 1.68 28.6867 1.4 28.42C1.13333 28.1533 0.92 27.84 0.76 27.48C0.613333 27.1067 0.54 26.7067 0.54 26.28Z"/>
      {addOutine &&
        <circle
        stroke={fill}
        strokeWidth={2}
        fill="none"
        cx={width/2} cy={width/2} r={width/2 - 1} />
      }
    </svg>
  );
}


export default Warning;