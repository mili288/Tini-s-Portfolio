import React from 'react';
import {useParams} from 'react-router-dom';
import DATA from '../DATA';
import '../styles/WorkDesc.css';


function WorkDesc() {
  const itemid = useParams();
    const itemDetail = DATA.filter(x=>x.id == itemid.id)
    const item = itemDetail[0];
return (
  <>
  <div className="img-container">
  <img src={item.img} />
  </div>
  <h3>{item.title}</h3>
</>
)
}

export default WorkDesc;