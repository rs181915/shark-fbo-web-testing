import React from 'react';
import Header from 'components/Header/Header';

const Download = (name) => (
  <p className="font-semibold pb-3 flex justify-between">
    {name}
    {' '}
    <button className="text-[#0066FF]">
      Download
    </button>
  </p>
);
const DownloadInfo = (size, pages) => (
  <p className="pb-3 flex justify-between">
    {size}
    {' '}
    <span>
      {pages || ''}
    </span>
  </p>
);

const Iaps = () => (
  <div>
    <Header title="STARs - Standard Terminal Arrivals" />
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4 px-8">
        <div className="px-10">
          {Download('ILS OR LOC RWY 14R')}
          {Download('ILS OR LOC RWY 32L')}
          {Download('RNAV (RNP) Z RWY 14R')}
          {Download('RNAV (GPS) Y RWY 14R')}
          {Download('HARBOR VISUAL RWY 14R')}
          {Download('NOTE: Special Alternate Minimums apply')}
        </div>
        <div className="px-10">
          {DownloadInfo('(380KB)')}
          {DownloadInfo('(380KB)')}
          {DownloadInfo('(380KB)')}
          {DownloadInfo('(380KB)')}
          {DownloadInfo('(380KB)')}
          {DownloadInfo('(380KB)')}
        </div>
      </div>
    </div>
  </div>
);

export default Iaps;
