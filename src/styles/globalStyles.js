const colors = {

  background: '#f4f4f9', // pale grey

  primary: '#35348f', // purple
  lightPrimary: '#7574e8', // light purple
  XlightPrimary: '#a5a4f4', // extra light purple
  darkPrimary: '#19175b', // navy blue

  black: '#070719',
  white: '#fff',

  darkGrey: '#58595b',
  grey: '#939598',
  disabled: '#bbbec1', // lightGrey

  accent: '#f89e51', // orange
  cancel: '#f05358', // red
  confirm: '#58b773', // green

  lightAccent: '#ffecdd',

  boxShadow: '0px 4px 7px rgba(159, 159, 159, 0.25)',
  cardBoxShadow: '0px 2px 3px #6362b7',
};

const fontFamily = {
  main: '\'Lato\', sans-serif',
  body: '\'Roboto\', sans-serif',
  code: '\'Source Code Pro\', monospace',
};


// 16px = 1rem
const font = {
  XXsmall: '0.875rem', // 14px
  Xsmall: '1rem', // 16px
  small: '1.125rem', // 18px
  med: '1.25rem', // 20px
  large: '1.5rem', // 24px
  Xlarge: '2rem', // 32px
  massive: '3rem', // 48px
};

const breakpoint = {
  Xsmall: '480px',
  small: '600px',
  tablet: '768px',
  large: '1024px',
  Xlarge: '1280px',
  massive: '1440px',
};

export { colors, fontFamily, font, breakpoint };
