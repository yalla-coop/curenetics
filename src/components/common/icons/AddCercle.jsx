import React from 'react';

const AddCercle = ({ width = 25, fill = '#35348f' }) => {
  return (
    <svg
      fill={fill}
      width={width}
      viewBox="0 0 25 27"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="14.5" r="11.5" stroke="#35348F" strokeWidth="2" />
      <path
        d="m14.039 12.613h4.4531v2.6015h-4.4531v5.0743h-2.7656v-5.0743h-4.4766v-2.6015h4.4766v-4.7461h2.7656v4.7461z"
        fill="#35348F"
      />
    </svg>
  );
};

export default AddCercle;
