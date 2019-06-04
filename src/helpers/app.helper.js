import React from 'react';
import PropTypes from 'prop-types';

export const FocusTrap = ({ enabled }) => (
  enabled &&
    <style>
      {
        `html {
          overflow: hidden !important;
          maxWidth: 100vw !important;
          maxHeight: 100vh !important;
        }

        @media only screen and (max-width: 500px) {
          body {
            overflow: hidden !important;
          }
        }
      `}
    </style>
);

FocusTrap.defaultProps = {
  enabled: false,
};

FocusTrap.propTypes = {
  enabled: PropTypes.bool,
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
