import React, {useNavigate} from 'react'
import DATA from '../DATA';
import {NavLink} from 'react-router-dom';
import '../styles/Work.css';
import {Link} from 'react-router-dom';

export const cardItem = (item) => {
return(
  <Link to={`/work/${item.id}`}>
  <div className="l-container">
  <div className="b-game-card">
    <div className="b-game-card__cover" style={{backgroundImage: `url(${item.img})`}}></div>
  </div>
</div>
</Link>
);
}

function Work() {
  return (
    <>
     {DATA.map(cardItem)}
    </>
  )
}

export default Work