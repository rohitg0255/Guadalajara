import React, { useEffect, useState } from "react";

import "../../styles/header.css";

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);

  return (
    <header className={"top "+ (offset>50 ? 'sticky' : '')}>
      <h2 className="logo">
        <a href="/">Guadalajara Arts & Culture</a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://artsandculture.google.com/explore">Explore</a>
          </li>
          <li>
            <a href="https://artsandculture.google.com/play">Play</a>
          </li>
          <li>
            <a href="https://artsandculture.google.com/nearby">Nearby</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
