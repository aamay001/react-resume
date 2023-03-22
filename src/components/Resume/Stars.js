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

function Stars({ lev }) {
  const stars = [];
  for (let i = 1; i <= level(lev); i += 1) {
    stars.push(<img src={starsfilled} key={i} alt="filled-star" className="normal-icon" />);
    stars.push(<img src={starsfilleddark} key={i + 5} alt="filled-star" className="dark-icon" />);
  }
  for (let i = level(lev) + 1; i <= 5; i += 1) {
    stars.push(<img src={starsblank} key={i} alt="blank-star" className="normal-icon" />);
    stars.push(<img src={starsblankdark} key={i + 5} alt="blank-star" className="dark-icon" />);
  }
  return (
    <div className="keyword-level">
      {stars}
    </div>
  );
}

Stars.defaultProps = {
  lev: 0,
};

Stars.propTypes = {
  lev: PropTypes.number,
};

export default Stars;
