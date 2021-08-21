import React from "react";



function Card(props)
{
    return(
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
  <img src={props.imgsrc} className="card-img-top" alt="img1"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
  </div>
</div>
        </div>
    );
}

export default Card;