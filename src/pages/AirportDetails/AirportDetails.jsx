import React from 'react';
import Location from './Location';
import flag from '../../assets/images/flag.png';
import Operations from './Operations';
import Communications from './Communications';
import Services from './Services';
import Navigation from './Navigation';
import Runway from './Runway';
import OwnerShip from './OwnerShip';
import Statistics from './Statistics';
import Remarks from './Remarks';
import Stars from './Stars';
import Iaps from './Iaps';
import Departure from './Departure';

const AirportDetails = () => (
  <div className="bg-[#F9FAFC] pt-16">
    <div className="container mx-auto h-20 rounded shadow-2xl mb-16">
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
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <Navigation />
          <Runway />
          <OwnerShip />
          <Statistics />
          <Remarks />
          <div className="mt-10">
            <h1 className="text-primary text-2xl font-bold mb-3">Instrument Procedures</h1>
            <p className="mb-3">
              <span className="font-semibold">NOTE:</span>
              {' '}
              All procedures below are presented as PDF files. If you need a reader for these files, you should download the free Adobe Reader.
            </p>
            <p>
              <span className="font-semibold">NOT FOR NAVIGATION.</span>
              {' '}
              Please procure official charts for flight.
            </p>
            <p> FAA instrument procedures published for use from 11 August 2022 at 0901Z to 08 September 2022 at 0900z.</p>
          </div>
          <Stars />
          <Iaps />
          <Departure />
        </div>
        <div>2nd col</div>
      </div>
    </div>
  </div>
);

export default AirportDetails;
