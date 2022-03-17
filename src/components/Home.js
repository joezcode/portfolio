import React, { useState, useEffect } from 'react';
import Link from './Link';
import ScrollDown from './ScrollDown';
import './Home.css';

function Home() {

  const positions = ['frontend developer', 'web developer', 'fullstack developer', 'software developer']
  const [newPosition, setNewPosition] = useState("");

  const randomize = () => {
    return Math.floor(Math.random() * positions.length)
  }
  const shuffle = () => {
    let index = randomize()
    if (positions[index] === newPosition) index = randomize();
    setNewPosition(positions[index]);
  }

  useEffect(() => {
      const interval = setInterval(shuffle, 1000);
      return () => clearInterval(interval);
  })

  const button = <button className="button-cta">Get in touch!</button>


  return (
    <div className="Home reveal" name="Home">
      
      <div className="Home-message">
          <h2>Hello,</h2>
          <h1>
            I am Joakim Winther.<br/>
            A frontend developer<br/>
            based in Copenhagen.</h1>
          <h2 className="Home-message-highlight">
            Currently looking for a position as a <span id="Home-message-position">{newPosition}</span>.</h2>
            <Link to="Contact" value={button}>

            </Link>
          
            <Link to="Projects" value={<ScrollDown />}></Link>
      </div>
      
    </div>
  );
}

export default Home;
