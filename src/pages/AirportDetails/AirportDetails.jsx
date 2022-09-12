import React from 'react';
import Location from './Location';
import flag from '../../assets/images/flag.png';
import Operations from './Operations';
import Communications from './Communications';
import Services from './Services';

const AirportDetails = () => (
  <div>
    <div className="container mx-auto h-20 rounded shadow-2xl my-16">
      <div className="flex h-full items-center">
        <div className="px-16 py-6 rounded-l bg-secondary text-center text-2xl font-bold">KBFI</div>
        <div className="w-full flex justify-between items-center px-7">
          <div>
            <h1 className="text-xl font-semibold">Boeing Field/King County International Airport.</h1>
            <p className="text-lg">Seattle, Washington, USA</p>
          </div>
          <div>
            <img src={flag} alt="flag" />
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-center text-2xl font-semibold">FAA INFORMATION EFFECTIVE 11 AUGUST 2022</h1>
    <Location />
    <div className="container h-24 mx-auto bg-primary py-3 rounded mt-10 mb-7 text-center"><p className="text-sm text-[#fff]">Ad banner</p></div>
    <Operations />
    <Communications />
    <Services />
  </div>
);

export default AirportDetails;
