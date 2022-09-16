import React from 'react';
import Header from 'components/Header/Header';
import Fields from 'components/Fields/Fields';

const Operations = () => (
  <div>
    <Header title="Airport Operations" />
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4 px-8">
        <div>
          <Fields title="Airport use:" subTitle="Open to the public" />
          <Fields title="Activation date:" subTitle="11/1938" />
          <Fields title="Control tower:" subTitle="yes" />
          <Fields title="Lights:" subTitle="HIRL RY 14R/32L OPEN DUSK-DAWN. MIRL RY 14L/32R NOT OPER 0600-1500Z++." />
        </div>
        <div>
          <Fields title="ARTCC:" subTitle="SEATTLE CENTER" />
          <Fields title="FSS:" subTitle="SEATTLE FLIGHT SERVICE STATION" />
          <Fields title="NOTAMs facility:" subTitle="BFI (NOTAM-D service available)" />
          <Fields title="Beacon:" subTitle=" white-green (lighted land airport) Operates sunset to sunrise." />
          <Fields title="International operations:" subTitle="international airport of entry US CUSTOMS USER FEE ARPT." />
        </div>
        <div>
          <Fields title="Attendance:" subTitle="CONTINUOUS" />
          <Fields title="Wind indicator:" subTitle="Lighted" />
          <Fields title="Segmented circle:" subTitle="no" />
          <Fields title="Fire and rescue:" subTitle="ARFF index A" />
        </div>
      </div>
    </div>
  </div>
);

export default Operations;
