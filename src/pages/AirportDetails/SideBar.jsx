import React from 'react';
import SmFields from 'components/SmFields/SmFields';
import map1 from '../../assets/images/map1.png';
import map2 from '../../assets/images/map2.png';
import diagram from '../../assets/images/diagram.png';
import ranway from '../../assets/images/ranway.png';

const smHeader = (title) => (
  <div className="container mx-auto bg-primary py-2 text-center rounded mt-10 mb-3"><p className="text-xs font-semibold text-[#fff] px-7">{title}</p></div>
);

const SideBar = () => (
  <div>
    <div className="mb-4">
      <img src={map1} alt="map1" />
      <p className="text-xs my-2 font-semibold">
        Road maps at:
        {' '}
        <span className="text-textColor">MapQuest Bing Google</span>
      </p>
    </div>
    <div>
      {smHeader('Aerial photo')}
      <p className="text-xs my-2">
        <span className="text-secondary">WARNING: </span>
        {' '}
        Photo may not be current or correct
      </p>
      <img src={ranway} alt="map1" />
      <p className="px-10 text-sm py-2">
        Photo by Adam S. Queen
        Taken in August 2014
        looking northwest.
      </p>
      <p className="text-xs my-2">
        Do you have a better or more recent aerial photo of Boeing Field/King County International Airport that you would like to share? If so, please
        {' '}
        <span className="text-textColor"> send us your photo</span>
      </p>
    </div>
    <div className="mb-4">
      {smHeader('Sectional chart')}
      <img src={map2} alt="map1" />
    </div>
    <div className="mb-4">
      {smHeader('Airport diagram')}
      <img src={diagram} alt="map1" />
      <p className="text-center py-2 text-xs">
        <a href="/" className="text-textColor font-semibold">Download PDF</a>
        <p>of official airport diagram from the FAA</p>
      </p>
    </div>
    <div className="mb-4">
      {smHeader('Airport distance calculator')}
      <p className="py-2 text-xs">
        Flying to Boeing Field/King County
        {' '}
        <br />
        {' '}
        International Airport? Find the distance to fly.
      </p>
      <div className="flex justify-center items-center">
        <p>Form</p>
        <input className="w-24 mx-3 border border-primary" type="text" />
        <p>To KBFI</p>
      </div>
      <div className="text-center mt-4 mb-6">
        <button className="text-xs bg-secondary font-semibold p-2 rounded">Calculate distence</button>
      </div>
    </div>
    <div className="mb-4">
      {smHeader('Sunrise and sunset')}
      <p className="text-right text-xs">Times for 29-Aug-2022</p>
      <div className="flex justify-end text-sm font-semibold">
        <p className="px-4">
          Local
          (UTC-7)
        </p>
        <p>
          Zulu
          (UTC)
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4 text-xs my-3">
        <div className="col-span-3">
          <p className="font-semibold">Morning civil twilight</p>
          <p className="font-semibold">Sunrise</p>
          <p className="font-semibold">Sunset</p>
          <p className="font-semibold">Evening civil twilight</p>
        </div>
        <div>
          <p>05:53</p>
          <p>06:25</p>
          <p>19:55</p>
          <p>20:27</p>
        </div>
        <div>
          <p>12:53</p>
          <p>13:25</p>
          <p>02:55</p>
          <p>03:27</p>
        </div>
      </div>
    </div>
    <div className="mb-4">
      {smHeader('Current date and time')}
      <div className="grid grid-cols-5 gap-4 text-xs my-3 px-3">
        <div className="col-span-2">
          <p className="font-semibold">Zulu (UTC)</p>
          <p className="font-semibold">Local (UTC-7) </p>
        </div>
        <div className="col-span-3">
          <p>Times for 29-Aug-2022</p>
          <p>Times for 29-Aug-2022</p>
        </div>
      </div>
    </div>
    <div className="mb-4">
      {smHeader('METAR')}
      <div className="my-3">
        <SmFields title="KBFI" des="300453Z VRB03KT 10SM CLR 23/11 A2995 RMK AO2 SLP143 T02330111" />
        <SmFields title="KRNT" sub="4nm SE" des="300453Z AUTO 33008KT 10SM CLR 23/14 A2995 RMK AO2 SLP146 T02330139" />
        <SmFields title="KSEA" sub="5nm S" des="300453Z 36009KT 10SM FEW250 23/11 A2997 RMK AO2 SLP151 T02280106" />
        <SmFields title="KPWT" sub="18nm W" des="300456Z AUTO 06008KT 10SM CLR 22/12 RMK AO2 SLPNO T02220117 $" />
        <SmFields title="KTIW" sub="19nm SW" des="300453Z AUTO 02008KT 10SM CLR 23/11 A2995 RMK AO2 SLP139 T02280106" />
      </div>
    </div>
    <div className="mb-4">
      {smHeader('TAF')}
      <div className="my-3">
        <SmFields title="KBFI" des="300254Z 3003/3024 31006KT P6SM SCT250 FM300600 30003KT P6SM SCT250 FM301300 02003KT P6SM FEW250" />
        <SmFields title="KSEA" sub="5nm S" des="292100Z 2921/3024 01010G17KT P6SM SKC FM292200 01009KT P6SM SKC FM300400 02008KT P6SM SKC FM301300 02004KT P6SM FEW250" />
        <SmFields title="KPWT" sub="18nm W" des="291722Z 2918/3018 06006KT P6SM SKC FM292200 03008KT P6SM SKC FM300400 00000KT P6SM SKC" />
      </div>
    </div>
    <div className="mb-4">
      {smHeader('NOTAMs')}
      <div className="my-3 px-3 text-center">
        <p className="text-textColor text-sm font-semibold">Click for the latest NOTAMs</p>
        <p className="text-xs mt-2">NOTAMs are issued by the DoD/FAA and will open in a separate window not controlled by AirNav.</p>
      </div>
    </div>
  </div>
);

export default SideBar;
