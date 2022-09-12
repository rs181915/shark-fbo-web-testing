import React from 'react';
import Header from 'components/Header/Header';
import Fields from 'components/Fields/Fields';

const Services = () => (
  <div>
    <Header title="Airport Services" />
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4 px-8">
        <div>
          <Fields title="Fuel available:" subTitle="100LL JET-A" />
          <Fields title="Airframe service:" subTitle="MAJOR" />
          <Fields title="Time zone:" subTitle="UTC -7 (UTC -8 during Standard Time)" />
        </div>
        <div>
          <Fields title="Parking:" subTitle="hangars and tiedowns" />
          <Fields title="Powerplant service:" subTitle="MAJOR" />
        </div>
        <div>
          <Fields title="Bottled oxygen:" subTitle="HIGH/LOW" />
          <Fields title="Bulk oxygen:" subTitle="HIGH/LOW" />
        </div>
      </div>
    </div>
  </div>
);

export default Services;
