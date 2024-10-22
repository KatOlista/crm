import { useEffect } from 'react'

import { bigScreenBreakpoint } from '../utils'

export const useClickOutside = (
  ref,
  callback,
) => {
  const innerWidth = window.innerWidth;

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    if (innerWidth < bigScreenBreakpoint) {
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
