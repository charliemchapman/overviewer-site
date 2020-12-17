import React from "react"
import { Link } from "gatsby"

import mail from "../images/mail-icon.png"
import twitter from "../images/twitter-icon.png"

const Footer = () => (
  <footer style={{ textAlign: "center", fontSize: "14px" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <a href="mailto:dev.charliemchapman@gmail.com" class="social-button" ><img src={mail}/></a>
      <a href="https://twitter.com/OverviewerApp" class="social-button" ><img src={twitter}/></a>
    </div>
    <div>Made by <a href="https://charliemchapman.com/">Charlie Chapman</a> in St. Louis</div>
    <div>
      <Link to="/privacy">Privacy
      </Link> | © {new Date().getFullYear()}</div>
  </footer>
)

export default Footer
