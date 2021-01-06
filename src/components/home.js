import React from "react"
import icon from "../images/overviewer-icon-rounded.png"
import appStore from "../images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"

const Home = () => (
  <div style={{ }}>
    <div style={{ height: "130px", marginTop: "60px", marginBottom: "20px" }}>
      <img src={icon} height="100%" width="100%" style={{ objectFit: "contain" }} />
    </div>
    <div style={{ textAlign: "center" }}>
      <h1>Overviewer </h1>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <a href="https://itunes.apple.com/app/id1528900395">
        <img src={appStore} style={{ marginTop: "40px", marginBottom: "40px" }}/>
      </a>
    </div>
    <div style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
      <div className="postYoutube">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fadOMMpQErg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;  picture-in-picture; fullscreen" allowfullscreen></iframe>
      </div>
    </div>
    <div style={{ textAlign: "center" }}>
      <a href="https://s3.us-east-2.amazonaws.com/media.charliemchapman.com/overviewer/overviewer-presskit-v01.zip">Download Presskit Here</a>
    </div>
  </div>
)

export default Home
