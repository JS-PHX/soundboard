import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className='styled-list'>
        <li><Link to="/">
        <img src={process.env.PUBLIC_URL + '/imgs/home.png'} className='home-img'/>
        </Link></li>
        {/* <li><Link to="/song1">Flashing Lights</Link></li>
        <li><Link to="/song2">Around the World</Link></li> */}
      </ul>
    </nav>
  );
}
