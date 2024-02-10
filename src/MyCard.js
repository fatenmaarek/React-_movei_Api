import React from 'react';
import { Link } from 'react-router-dom';

function MyCard(props) {
  return (
    <>
      <div className="card container" style={{ width: "13rem", margin: "1rem", borderStyle: "none" , height : "14rem"}}>
        <div className="row d-flex wrapper justify-content-space-between" style={{ borderRadius: "50%" }}>
          <img src={props.img} className="card-img-top" style={{ width: "13rem", height : "14rem" }} alt="..." />
          <div className="card-body">
            {props.path && <Link to={props.path}><h3 className="card-title">{props.name}</h3></Link>}
            {!props.path && <h3 className="card-title">{props.name}</h3>}
            
            <h4 className="card-text text-primary">{props.pos}</h4>
            <p className="card-text">{props.bio}</p>
            {props.num && <p className="card-text text-primary">Age is: {props.num}</p>}
            
          </div>

        </div>
       
      </div>
    </>
  );
}

export default MyCard;
