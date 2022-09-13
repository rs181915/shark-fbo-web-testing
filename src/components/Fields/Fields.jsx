import React from 'react';

const Fields = ({ title = '', subTitle = '', css = '' }) => (
  <p className={`font-semibold pb-3 flex ${css}`}>
    {title}
    {' '}
    <span className="font-normal pl-3">
      {subTitle}
    </span>
  </p>
);

export default Fields;
