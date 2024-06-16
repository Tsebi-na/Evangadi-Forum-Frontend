import React from 'react'
import './Home.css';

import Login from './Login';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Register from '../Register/Register';


function Home() {
    const [show, setShow] = useState(true);
    function toggle() {
      setShow((previes) => !previes);
    }

  return (

    <div className="homebackground">
    <div className="home-wrapper container">
      <div className="homeall row mt-5 py-5">
        {show ? <Login toggle={toggle} /> : <Register toggle={toggle} />}

        <div className="info col-12 col-md ">
          <p className="about">About</p>
          <h1 className="eva"> Evangadi Networks Q&A</h1>
          <p>
            No matter what stage of life you are in, whether you're just
            starting elementary school or being promoted to CEO of a Fortune
            500 company, you have much to offer to those who are trying to
            follow in your footsteps.
          </p>

          <p>
            Weather you are willing to share your knowledge or you are just
            looking to meet mentors of your own, please start by joining the
            network here.
          </p>
          <button className="button-home home-link">
              HOW IT WORKS
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home;