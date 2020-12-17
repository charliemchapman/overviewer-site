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
      <img src={appStore} style={{ marginTop: "40px", marginBottom: "40px" }}/>
    </div>
  </div>
)

export default Home
