import React, {useState} from 'react';
import {
  State,
  Title,
  Context
} from './examples';

import {
  Memo
} from './newish_features';

const App = () => {

  const [foo, bar] = useState(0);


  return (
    <>
      {/* <State /> */}
      {/* <Title title="TEST" /> */}
      {/* <Context /> */}
      <>
        <Memo />
        <button onClick={() => bar(foo + 1)}>Click</button>
      </>
    </>
  );
};

/*
baglabelprinting
*/

export default App;
