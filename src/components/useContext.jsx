import React, { useContext } from 'react';

const ThemeContext = React.createContext('dark');

function UseContext() {
  const theme = useContext(ThemeContext);
  return <p>The theme is {theme}</p>;
}

export default UseContext