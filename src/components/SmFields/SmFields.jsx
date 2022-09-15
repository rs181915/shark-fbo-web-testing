import React from 'react';

const SmFields = ({ title, sub, des }) => (
  <p className="pb-3 flex justify-center">
    <span className="text-sm text-textColor font-semibold">
      {title}
      {' '}
      <br />
      <span className="text-[#000] text-xs">{sub || ''}</span>
    </span>
    <span className="text-xs text-[#000] pl-3">
      {des}
    </span>
  </p>
);

export default SmFields;
