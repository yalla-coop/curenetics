import React from 'react';

const Plus = ({ titleTag = 'Plus', width = 24, fill = '#000', addOutine = null }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      width
    }}>
    {titleTag && <title>{titleTag}</title>}
    <path fill="none" d="M0 0h24v24H0z"/>
    <path fill={fill} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    {addOutine &&
      <circle
      stroke={fill}
      strokeWidth={2}
      fill="none"
      cx={width/2} cy={width/2} r={width/2 - 1} />
    }
  </svg>
);

export default Plus;