import React from 'react'

export default function Card(card) {
  return (
    <>
      {Object.values(card).map((value) => {
        return (
        <div className="property-card">
          <a href="#">
            <div className="property-image" style={{backgroundImage: `url(${value.img})`}}>
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
    </>
  )
  }
