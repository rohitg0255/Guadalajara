import React from 'react'

import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="d-more">
      <h1>Discover More</h1>
      <div className="d-more__items">
        <div className="d-more__item story">
          <p><a href="https://artsandculture.google.com/search/exhibit?project=love">Stories</a></p>
        </div>
        <div className="d-more__item art">
          <p><a href="https://artsandculture.google.com/search/asset?project=love">Artworks and Artifacts</a></p>
        </div>
        <div className="d-more__item video">
          <p><a href="https://artsandculture.google.com/search/video?project=love">Videos</a></p>
        </div>
        <div className="d-more__item collection">
          <p><a href="https://artsandculture.google.com/search/partner?project=love">Collections</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer