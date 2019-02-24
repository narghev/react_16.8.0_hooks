import React, { memo } from 'react';

const Test = () => {
  console.log('HEYYY, I GOT RENDERED');

  return (<h1>HI</h1>);
};

export default memo(Test);