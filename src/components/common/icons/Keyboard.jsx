import React from 'react';

const Keyboard = ({ titleTag = 'Keyboard', width = 19, fill = '#ffffff' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 13"
    style={{
      width
    }}>
    {titleTag && <title>{titleTag}</title>}
    <path
      fill={fill}
      d="M16.8042 2.23068V11.0861H2.63558V2.23068H16.8042ZM16.8042 0.459595H2.63558C1.66149 0.459595 0.873357 1.25658 0.873357 2.23068L0.864502 11.0861C0.864502 12.0602 1.66149 12.8572 2.63558 12.8572H16.8042C17.7783 12.8572 18.5753 12.0602 18.5753 11.0861V2.23068C18.5753 1.25658 17.7783 0.459595 16.8042 0.459595ZM8.83437 3.11622H10.6055V4.8873H8.83437V3.11622ZM8.83437 5.77284H10.6055V7.54392H8.83437V5.77284ZM6.17775 3.11622H7.94883V4.8873H6.17775V3.11622ZM6.17775 5.77284H7.94883V7.54392H6.17775V5.77284ZM3.52112 5.77284H5.29221V7.54392H3.52112V5.77284ZM3.52112 3.11622H5.29221V4.8873H3.52112V3.11622ZM6.17775 8.42946H13.2621V10.2005H6.17775V8.42946ZM11.491 5.77284H13.2621V7.54392H11.491V5.77284ZM11.491 3.11622H13.2621V4.8873H11.491V3.11622ZM14.1476 5.77284H15.9187V7.54392H14.1476V5.77284ZM14.1476 3.11622H15.9187V4.8873H14.1476V3.11622Z"/>
  </svg>
);

export default Keyboard;