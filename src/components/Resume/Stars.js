import React from 'react'
import starsfilled from '../../icons/star-fill.svg'
import starsblank from '../../icons/star-blank.svg'

const Stars = ({ lev }) => {
    const stars = [];
    for (let i = 1; i <= level(lev); i++) {
        stars.push(<img src={starsfilled} key={i} alt="filled-star" />)
    }
    for (let i = level(lev) + 1; i <= 5; i++) {
        stars.push(<img src={starsblank} key={i} alt="blank-star" />)
    }
    return (
        <div className="keyword-level">
            {stars}
        </div>
    );
}

function level (lev) {
    let a = parseInt(lev);
    a = Number.isNaN(a) || a < 0 ? 0 : a;
    a = (a > 5) ? 5 : a;
    console.log(a);
    return a;
}

export default Stars;