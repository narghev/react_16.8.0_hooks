import React, { useContext } from 'react';

const theme = 'dark';

const context = React.createContext(theme);
const { Provider, Consumer } = context;

const ConsumerExample = () => (
  <Consumer>
  {
    value => <p>value from context: {value}</p>
  }
  </Consumer>
);

const HookExample = () => {
  const themeContext = useContext(context);

  return (
    <p>value from context: {themeContext}</p>
  );
};

const Wrapper = ({ children }) => (
  <Provider value={theme}>
    <ConsumerExample />
    <HookExample />
  </Provider>
);

export default Wrapper;
