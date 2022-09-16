import React from 'react';
import Header from 'components/Header/Header';
import Fields from 'components/Fields/Fields';

const Navigation = () => (
  <div>
    <Header title="Nearby radio navigation aids" />
    <div className="grid grid-cols-4 gap-4 px-8">
      <div>
        <Fields title="VOR radial/distance" />
        <Fields subTitle="SEAr344/5.7" />
        <Fields subTitle="PAEr162/23.4" />
      </div>
      <div>
        <Fields title="VOR name" />
        <Fields subTitle="SEATTLE VORTAC" />
        <Fields subTitle="PAINE VOR/DME" />
      </div>
      <div>
        <Fields title="Freq" />
        <Fields subTitle="116.80" />
        <Fields subTitle="110.60" />
      </div>
      <div>
        <Fields title="Var" />
        <Fields subTitle="19E" />
        <Fields subTitle="20E" />
      </div>
    </div>
  </div>
);

export default Navigation;
