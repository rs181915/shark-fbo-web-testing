import React from 'react';
import logo from '../../assets/images/logo.png';

function NavBar() {
  return (
    <div className="container">
      <div className="flex items-baseline gap-10 py-3">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-4 text-lg font-semibold text-[#808080]">
          <p className="border border-primary text-primary px-3 py-1 rounded">Airports</p>
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
