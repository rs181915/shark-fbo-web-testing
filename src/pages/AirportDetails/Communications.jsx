import React from 'react';
import Header from 'components/Header/Header';
import Fields from 'components/Fields/Fields';

const Communications = () => (
  <div>
    <Header title="Airport Communications" />
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4 px-8">
        <div>
          <Fields title="UNICOM:" subTitle="122.95" />
          <Fields title="ATIS:" subTitle="127.75" />
          <Fields title="BOEING TOWER:" subTitle="118.3 ;RWY 14L/32R 120.6 ;RWY 14R/32L & ALL IFR 257.8" />
          <Fields title="SEATTLE DEPARTURE:" subTitle="119.2 ;076-160 RWY 14 119.2 ;341-075 120.1 ;199-300 120.4 ;301-340 RWY 32 125.9 ;076-160 RWY 32 125.9 ;301-340 RWY 14 126.5 ;161-198" />
          <Fields title="WX ASOS at RNT (4 nm SE):" subTitle="126.95 (425-255-6080)" />
          <Fields title="WX AWOS-3PT at PWT (19 nm W):" subTitle="yes" />
        </div>
        <div>
          <Fields title="BOEING GROUND:" subTitle="121.9" />
          <Fields title="WX ASOS:" subTitle="PHONE 206-658-6435" />
          <Fields title="SEATTLE APPROACH:" subTitle="119.2 ;076-160 RWY 14 119.2 ;341-075 120.1 ;199-300 120.4 ;301-340 RWY 32 125.9 ;076-160 RWY 32 125.9 ;301-340 RWY 14 126.5 ;161-198" />
          <Fields title="CLEARANCE DELIVERY:" subTitle="132.4" />
          <Fields title="WX ASOS at SEA (5 nm S):" subTitle="PHONE 206-214-2592" />
          <Fields title="IC:" subTitle="119.2 ;341-075" />
        </div>
      </div>
    </div>
  </div>
);

export default Communications;
