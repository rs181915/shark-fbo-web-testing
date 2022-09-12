import React from 'react';
import icon from '../../assets/images/li.png';
import banner from '../../assets/images/homeBanner.png';

function Home() {
  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold text-customBlue">
            Find Airport
            {' '}
            <span className="text-secondary">Information</span>
          </h1>
          <div className="flex gap-4 pt-10 pb-2">
            <input className="w-[420px] h-[60px] border border-customBlue rounded px-2" type="text" placeholder="Serch by Airport ID, or Name, or city" />
            <button className="bg-customBlue text-[#fff] font-semibold p-5 rounded">Get Information</button>
          </div>
          <p className="text-[#808080] ml-10 pb-8">Example :  KBOS</p>
          <div className="font-medium text-customBlue">
            <div className="flex item-center text-lg gap-2">
              <img className="w-3 h-5" src={icon} alt="icon" />
              <p>Browse by U.S. state</p>
            </div>
            <div className="flex item-center text-lg gap-2">
              <img className="w-3 h-5" src={icon} alt="icon" />
              <p>Browse by country/territory</p>
            </div>
            <div className="flex item-center text-lg gap-2">
              <img className="w-3 h-5" src={icon} alt="icon" />
              <p>Browse by country/territory</p>
            </div>
            <div className="flex item-center text-lg gap-2">
              <img className="w-3 h-5" src={icon} alt="icon" />
              <p>Browse by country/territory</p>
            </div>
          </div>
        </div>
        <div>
          <img src={banner} alt="banner img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
