import React from 'react';
import Header from 'components/Header/Header';
import Fields from 'components/Fields/Fields';

const Location = () => (
  <div>
    <Header title="Location" />
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4 px-8">
        <div>
          <Fields title="FAA Identifier:" subTitle="BFI" />
          <Fields title="Variation:" subTitle="15E (2020)" />
          <Fields title="From city:" subTitle="4 miles S of SEATTLE, WA" />
        </div>
        <div>
          <Fields title="Lat/Long:" subTitle="47-31-47.9000N 122-18-07.0000W 47-31.798333N 122-18.116667W 47.5299722,-122.3019444 (estimated)" />
        </div>
        <div>
          <Fields title="Elevation:" subTitle="21.6 ft. / 6.6 m (surveyed)" />
          <Fields title="Time zone:" subTitle="UTC -7 (UTC -8 during Standard Time)" />
          <Fields title="Zip code:" subTitle="98108" />
        </div>
      </div>
    </div>
  </div>
);

export default Location;
