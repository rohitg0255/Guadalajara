import React from 'react'

import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="d-more">
      <h1>Discover More</h1>
      <div className="d-more__items">
        <div className="d-more__item story">
          <p>Stories</p>
        </div>
        <div className="d-more__item art">
          <p>Artworks and Artifacts</p>
        </div>
        <div className="d-more__item video">
          <p>Videos</p>
        </div>
        <div className="d-more__item collection">
          <p>Collections</p>
        </div>
      </div>
    </div>
  )
}

export default Footer