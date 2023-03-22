import React from 'react';
import PropTypes from 'prop-types';

export function FocusTrap({ full, mobile }) {
  return (
    <>
      {mobile &&
        <style>
          {`@media only screen and (max-width: 500px) {
          body {
            overflow: hidden !important;
          }

          html, body {
            overflow: hidden !important;
            max-width: 100vw !important;
            max-height: 100vh !important;
          }
        }`}
        </style>}
      {full &&
        <style>
          {`
          html, body {
            overflow: hidden !important;
            max-width: 100vw !important;
            max-height: 100vh !important;
          }
        `}
        </style>}
    </>
  );
}

FocusTrap.defaultProps = {
  full: false,
  mobile: false,
};

FocusTrap.propTypes = {
  full: PropTypes.bool,
  mobile: PropTypes.bool,
};

export const debounceMap = new Map();

export const debounce = (func, wait, immediate, key) => {
  if (immediate) {
    func();
    return;
  }
  const existing = debounceMap.get(key);
  if (existing) {
    clearTimeout(existing);
  }
  const timeout = setTimeout(func, wait);
  debounceMap.set(key, timeout);
};

export const unbounce = (key) => {
  const existing = debounceMap.get(key);
  if (existing) {
    clearTimeout(existing);
  }
  debounceMap.clear(key);
};
