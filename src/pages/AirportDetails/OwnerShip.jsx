import React from 'react';
import Header from 'components/Header/Header';
import Fields from 'components/Fields/Fields';

const OwnerShip = () => (
  <div>
    <Header title="Airport Ownership and Management from official FAA records" />
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4 px-8">
        <div>
          <Fields title="Ownership:" subTitle="Publicly-owned" />
          <Fields title="Owner:" subTitle="KING COUNTY 516 THIRD AVE SEATTLE, WA 98104 Phone (206) 296-7380" />
        </div>
        <div>
          <Fields title="Manager:" subTitle="JOHN PARROTT, AAE 7277 PERIMETER ROAD SOUTH SEATTLE, WA 98108-3844 (206) 296-7334" />
        </div>
      </div>
    </div>
  </div>
);

export default OwnerShip;
