import React from 'react'
import logo from "../../assets/image/10002.png";
import "./footer.css"
import { AiFillFacebook } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <footer>
 <div className="footer-warpper">
        <div className="footer-top">
          <div className="container">
            <div className="footer-bottom-content clearfix">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="logo-footer">
                    <a className="navbar-brand" href="/">
                      <img src={logo} alt="" />
                    </a>
                  </div>

                  <ul className="footer-social-list list-social ">
                    <li>
                      <Link to="https://www.facebook.com/EthiopiansNetwork">
                        <i className="social_facebook ">
                          <AiFillFacebook />
                        </i>
                      </Link>
                    </li>
                    <li >
                      <Link to="https://www.instagram.com/evangaditech/">
                        <i className="social_instagram ">
                          <TiSocialInstagram />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/c/weareethiopians">
                        <i className="social_youtube ">
                          <AiFillYoutube />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-md-4">
  <h5 className="text-light">Useful Link</h5>
  <ul className="list-menu text-gray">
  <li>
  <a className="a" href="https://www.evangadi.com/explained/">
    How it works
  </a>
</li>

    <li>
  <a className="a" href="https://www.evangadi.com/legal/terms/">
    Terms of Service
  </a>
</li>

    <li>
      <a className="a" href="https://www.evangadi.com/legal/privacy/">
        Privacy policy
      </a>
    </li>
  </ul>
</div>

                <div className="col-lg-4 col-md-4">
                  <h5 className="text-light">Contact Info</h5>
                  <ul className="list-menu contact-list">
                    <li className="b">Evangadi Networks</li>
                    <li className="b">support@evangadi.com</li>
                    <li className="b">+1-202-386-2702</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer