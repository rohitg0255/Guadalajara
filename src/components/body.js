import React from "react";

import duck from "../images/duck.jpg";
import fire from "../images/fire.avif"
import grain from "../images/grain.avif"
import stat from "../images/stat.avif"

import previous from "../images/previous.svg"
import next from "../images/next.svg"

import "../styles/body.css";

const Body = () => {
  return (
    <main>
      <section className="love">
        <h1 className="love_body_text">Love</h1>
        <p>Stories, art, and artifacts that make our hearts beat faster</p>
        <div className="love_body_icon"></div>
      </section>

      <section className="shaped">
        <h2>How love has shaped the world</h2>
        <div className="card">
          <div className="left">
            <img src={grain} alt="" />
          </div>
          <div className="right tile_body">
            <h4>PIONEERING PARTNERSHIPS</h4>
            <div>
              <h3>7 Couples Who Made History</h3>
              <p>Revolutionary relations,breaking boundaries</p>
            </div>
            <button className="secondary" onclick="location.href='https://artsandculture.google.com/story/7-couples-who-changed-the-world/NwLCt7AVvem6KQ'" type="button">Explore</button>
          </div>
        </div>
        <div className="card">
          <div className="right">
            <img src={duck} alt="" />
          </div>
          <div className="left tile_body">
            <h4>THE ART OF LOVE</h4>
            <div>
              <h3>8 Love Lessons from Art History</h3>
              <p>Take some tips in the art of love from these paintings</p>
            </div>
            <button className="secondary" onclick="location.href='https://artsandculture.google.com/story/hwUBQiY81w95Jw'" type="button">Explore</button>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="f-item1">
          <h2>Featured collection</h2>
        </div>
        <div className="f-item2">
          <img src={stat} alt="" />
        </div>
        <div className="f-item3">
          <p>
            New York City’s Lesbian, Gay, Bisexual & Transgender Community
            Center empowers people to lead healthy, successful lives. The Center
            celebrates our diversity and advocates for justice and opportunity.
            The LGBT Community Center National History Archive is a
            community-based archive that collects, preserves and makes available
            to the public the documentation of LGBTQ lives and organizations
            centered in and around New York.
          </p>
        </div>
        <div className="f-item4">
          <button className="accent">See the collection</button>
        </div>
      </section>

      <section className="kisses">
        <div className="up">
          <h2>Kisses in art</h2>
          <p>
            Travel across art history with the most famous kisses and embraces
          </p>
        </div>
        <div className="down">
          <div className="previous">
            <button onClick={()=>{console.log(1)}}><object data={previous} width="40" height="40"> </object></button>
          </div>
          <div className="next">
            <button onClick={()=>{console.log(1)}}><object data={next} width="40" height="40"> </object></button>
          </div>
          <div className="uno">
            <h3>The Kiss</h3>
            <p>Richharch Tadei</p>
          </div>
          <div className="uno">
            <h3>The Kiss</h3>
            <p>Manoalo frand</p>
          </div>
          <div className="uno">
            <h3>Mother's Kiss</h3>
            <p>Ricolo paolo</p>
          </div>
          <div className="uno">
            <h3>Francesa Armini</h3>
            <p>Rubecay antolo</p>
          </div>
          <div className="uno">
            <h3>Kiss Two</h3>
            <p>Ana de armas</p>
          </div>
          <div className="uno">
            <h3>The Kiss</h3>
            <p>Rubeni maco</p>
          </div>
          <div className="uno">
            <h3>The Kiss</h3>
            <p>marc zelemnski</p>
          </div>
          <div className="uno">
            <h3>Diego River</h3>
            <p>Unknown</p>
          </div>
          <div className="uno">
            <h3>Narc Atom</h3>
            <p>Banksy</p>
          </div>
          <div className="uno">
            <h3>Ain Sakhri</h3>
            <p>Unknown</p>
          </div>
        </div>
      </section>

      <section className="bunch">
        <div className="card">
          <h2>Now Color in Your Own Bunch of Roses</h2>
          <p>Send your artistic creation to your Valentine</p>
          <button className="primary">Play</button>
        </div>
      </section>

      <section className="blob-opera">
        <div className="card">
          <div className="right">
            <img src={fire} alt="" />
          </div>
          <div className="left tile_body">
            <h4 className="p-accent">MADE WITH MACHINE LEARNING</h4>
            <div>
              <h3>If Music Be the Food of Love...</h3>
              <p>Play on with Blob Opera</p>
              <button className="accent">Try it</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;
