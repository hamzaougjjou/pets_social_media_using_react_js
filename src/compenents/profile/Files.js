import React from 'react'
import "./../../assets/css/file.css";
import profile from "./../../assets/img/profile.jpg";
import cat1 from "./../../assets/img/cat1.jpg";
import v1 from "./../../assets/videos/v1.mp4";

function Files() {
  return (
    <>
      {/* ================================================ */}

      {/* <!-- Photo Grid --> */}
      <div className="row">
        <h2>profile images</h2>
        <div className="column">
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
          <img src={profile} alt="img" />
        </div>
        <h2>Posts images</h2>
        <div className="column">
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
          <img src={cat1} alt="img" />
        </div>
        <h2>Posts videos</h2>
        <div className="column">
          <video src= { v1} controls></video>
        </div>
      </div>

      {/* ================================================ */}
    </>
  )
}

export default Files