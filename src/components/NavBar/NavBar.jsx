import React from 'react';
import { Link } from 'react-router-dom';
import pathname from 'routes';
import logo from '../../assets/images/logo.png';

function NavBar() {
  return (
    <div className="container mx-auto">
      <div className="flex items-baseline gap-10 py-3">
        <Link to={pathname.home}>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="flex gap-4 text-lg font-semibold text-[#808080]">
          <Link to={pathname.airport}><p className="border border-primary text-primary px-3 py-1 rounded">Airports</p></Link>
          <p>Navaids</p>
          <p>Airspace fixed</p>
          <p>Aviation fuel</p>
          <p>Hotels</p>
          <p>Airboss</p>
          <p>Iphone App</p>
          <p>My Airnow</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
