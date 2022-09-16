import React from 'react';
import Header from 'components/Header/Header';
import Fields from 'components/Fields/Fields';

const Runway = () => (
  <div>
    <Header title="Runway Information" />
    <p className="text-center text-xl font-semibold mb-5">Runway 14R/32L</p>
    <div className="grid grid-cols-2 gap-4 px-8 mb-4">
      <div>
        <Fields title="Dimensions:" />
        <Fields title="Surface:" />
        <Fields title="Weight bearing capacity:" />
        <p className="font-semibold pb-3 pt-36">Runway edge lights:</p>
      </div>
      <div>
        <Fields subTitle="10007 x 200 ft. / 3050 x 61 m" />
        <Fields subTitle="asphalt/grooved, in good condition" />
        <Fields subTitle="PCN 90 /F/B/W/T" />
        <Fields title="Single wheel:" subTitle="100.0" css="justify-between" />
        <Fields title="Double wheel:" subTitle="200.0" css="justify-between" />
        <Fields title="Double tandem:" subTitle="500.0" css="justify-between" />
        <Fields title="Dual double tandem:" subTitle="800.0" css="justify-between" />
        <p className="pb-3 pl-1"><span className="font-normal">High intensity</span></p>
      </div>
    </div>
    <p className="text-center mb-7">
      <a href="/" className="border border-primary text-primary p-3 rounded">View more detail</a>
    </p>
    <p className="text-center text-xl font-semibold mb-5">Runway 14L/32R</p>
    <div className="grid grid-cols-2 gap-4 px-8 mb-4">
      <div>
        <Fields title="Dimensions:" />
        <Fields title="Surface:" />
        <Fields title="Weight bearing capacity:" />
        <p className="font-semibold pb-3 pt-44">Runway edge lights:</p>
        <Fields title="Operational restrictions:" />
      </div>
      <div>
        <Fields subTitle="3709 x 100 ft. / 1131 x 30 m" />
        <Fields subTitle="asphalt/grooved, in fair condition" />
        <Fields subTitle="PCN 71 /F/A/X/T" />
        <Fields title="Single wheel:" subTitle="120.0, LTD TO USE BY ACFT UP TO 12,500 LBS." css="justify-between" />
        <Fields title="Double wheel:" subTitle="250.0" css="justify-between" />
        <Fields title="Double tandem:" subTitle="550.0" css="justify-between" />
        <Fields title="Dual double tandem:" subTitle="1109.0" css="justify-between" />
        <p className="pt-1 pb-3 pl-1"><span className="font-normal">medium intensity</span></p>
        <Fields subTitle="RUNWAY 14L/32R NOT AVAILABLE FOR AIR CARRIER OPERATIONS" />
      </div>
    </div>
    <p className="text-center">
      <a href="/" className="border border-primary text-primary p-3 rounded">View more detail</a>
    </p>
  </div>
);

export default Runway;
