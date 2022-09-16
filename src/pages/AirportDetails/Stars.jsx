import React from 'react';
import Header from 'components/Header/Header';

const Download = (name) => (
  <p className="font-semibold pb-3 flex justify-between">
    {name}
    {' '}
    <button className="text-textColor">
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

const Stars = () => (
  <div>
    <Header title="STARs - Standard Terminal Arrivals" />
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4 px-8">
        <div className="px-10">
          {Download('CHINS FOUR')}
          {Download('GLASR ONE')}
          {Download('JAWBN SIX')}
          {Download('OLYMPIA TWO')}
          {Download('SKYKO ONE')}
        </div>
        <div className="px-10">
          {DownloadInfo('(380KB)', '2 pages')}
          {DownloadInfo('(380KB)', '2 pages')}
          {DownloadInfo('(380KB)')}
          {DownloadInfo('(380KB)', '2 pages')}
          {DownloadInfo('(380KB)')}
        </div>
      </div>
    </div>
  </div>
);

export default Stars;
