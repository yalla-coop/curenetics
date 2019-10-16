// isSmall
import { useEffect, useState } from 'react';

export default (width = '768px') => {
  const check = window.matchMedia(`(max-width: ${width})`);
  const [state, setState] = useState(check);

  const checkIsSmall = () => {
    if (state !== check.matches) {
      setState(check.matches);
    }
  };

  useEffect(() => {
    check.addListener(checkIsSmall);
    return () => {
      check.removeListener(checkIsSmall);
    };
  });

  checkIsSmall();
  return { IsSmall: check.matches };
};
