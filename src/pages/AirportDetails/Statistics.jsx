import React from 'react';
import Header from 'components/Header/Header';
import Fields from 'components/Fields/Fields';

const Statistics = () => (
  <div>
    <Header title="Airport Operational Statistics" />
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4 px-8">
        <div className="pr-10">
          <Fields title="Aircraft based on the field:" subTitle="384" css="justify-between" />
          <Fields title="Single engine airplanes:" subTitle="229" css="justify-between" />
          <Fields title="Multi engine airplanes:" subTitle="40" css="justify-between" />
          <Fields title="Jet airplanes:" subTitle="88" css="justify-between" />
          <Fields title="Helicopters:" subTitle="26" css="justify-between" />
          <Fields title="Gliders airplanes:" subTitle="229" css="justify-between" />
        </div>
        <div className="pr-10">
          <Fields title="Aircraft operations:" subTitle="avg 502/day *" css="justify-between" />
          <Fields title="transient general aviation" subTitle="52%" css="justify-between" />
          <Fields title="local general aviation" subTitle="27%" css="justify-between" />
          <Fields title="air taxi" subTitle="15%" css="justify-between" />
          <Fields title="commercial" subTitle="6%" css="justify-between" />
          <Fields title="military" subTitle="<1%" css="justify-between" />
          <Fields title="* for 12-month period ending 01 January 2019" />
        </div>
      </div>
    </div>
  </div>
);

export default Statistics;
