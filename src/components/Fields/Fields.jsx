import React from 'react';

const Fields = ({ title, subTitle }) => (
  <p className="font-semibold pb-3 flex">
    {title}
    {' '}
    <span className="font-normal pl-1">
      {subTitle}
    </span>
  </p>
);

export default Fields;
