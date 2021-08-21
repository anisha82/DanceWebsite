import React from "react";
import Card from "./Card";
import Styleimages from "./Styleimages";

function Styles(props) {
  return (
    <div className="my-5">
      <div className="container-fluid mb-5">
        <div className="row gx-4">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Styleimages.map((src, ind) => {
                return <Card key={ind} imgsrc={src.imgsrc} title={src.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Styles;
