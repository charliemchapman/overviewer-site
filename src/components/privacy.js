import React from "react"
import { Link } from "gatsby"

import icon from "../images/overviewer-icon-rounded.png"

const Home = () => (
  <div style={{ textAlign: "center", marginTop: "40px", display:"flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
    <div style={{ height: "130px", marginBottom: "40px" }}>
      <Link to="/">
        <img src={icon} height="100%" width="100%" style={{ objectFit: "contain" }} />
      </Link>
    </div>
    <h1>Privacy Policy</h1>
    <p style={{ marginBottom: "60px", maxWidth: "800px" }}>
        Overviewer takes your privacy very seriously. If you have opted in to allow Apple to share information with developers we recieve some anonymous analytics. Dark Noise uses no other third party analytics tools or SDKs to track your activity in the app.
    </p>
  </div>
)

export default Home
