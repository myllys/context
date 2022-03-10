import React, { useState } from 'react';

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};
const ThemeContext = React.createContext(buttonThemes.blue);

function App() {
  
  return (
    <ThemeContext.Provider value={buttonThemes.black}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <HeaderButton />
    </div>
  );
}
function HeaderButton() {
  const theme = React.useContext(ThemeContext);
  return (
    <div>
      <button style={{color: 'white',
    backgroundColor: 'blue' }}>
      Press me!
    </button>
    </div>
  );
}
export default App;