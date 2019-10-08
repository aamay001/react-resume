import React from 'react';
import PropTypes from 'prop-types';
import starsfilled from '../../icons/star-fill.svg';
import starsblank from '../../icons/star-blank.svg';

import starsfilleddark from '../../icons/dark/star-fill.svg';
import starsblankdark from '../../icons/dark/star-blank.svg';

const level = (lev) => {
  let a = parseInt(lev, 10);
  a = Number.isNaN(a) || a < 0 ? 0 : a;
  a = (a > 5) ? 5 : a;
  return a;
};

const Stars = ({ lev, darkMode }) => {
  const stars = [];
  for (let i = 1; i <= level(lev); i += 1) {
    stars.push(<img src={darkMode ? starsfilleddark : starsfilled} key={i} alt="filled-star" />);
  }
  for (let i = level(lev) + 1; i <= 5; i += 1) {
    stars.push(<img src={darkMode ? starsblankdark : starsblank} key={i} alt="blank-star" />);
  }
  return (
    <div className="keyword-level">
      {stars}
    </div>
  );
};

Stars.defaultProps = {
  lev: 0,
  darkMode: false,
};

Stars.propTypes = {
  lev: PropTypes.number,
  darkMode: PropTypes.bool,
};

export default Stars;
