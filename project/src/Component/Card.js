import React from "react";
import {useEffect} from 'react'

export default function Card(card) {
  // useEffect(() => {
  //   return(
  //     console.log("OutCard")
  //   )
  //  });
  return (
    <>
      <h1 className="title">FLOWARD</h1>
      <div className="center">
        <div className="card-group">
          {Object.values(card.card).map((value) => {
            return (
              <div className="property-card">
                <a href="#">
                  <div
                    className="property-image"
                    style={{ backgroundImage: `url(${value.img})` }}
                  >
                    <div className="property-image-title"></div>
                  </div>
                </a>
                <div className="property-description">
                  <h5>{value.title} </h5>
                  <p> {value.desc} </p>
                  <h4> {value.price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
