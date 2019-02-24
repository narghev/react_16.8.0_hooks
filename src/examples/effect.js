import React, { useEffect, useState } from 'react';

const Title = ({ title }) => {

  let [uselessState, setUselessState] = useState(1);

  useEffect(() => {
    console.log('set Doc title');
    document.title = title;
  }, []);

  console.log(uselessState);

  return (
    <>
      <button onClick={() => setUselessState(uselessState + 1)}>CLick me</button>
    </>
  );
};

export default Title;