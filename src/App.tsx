
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { myTheme } from './utils/themes';

import Button from './components/Button';
import Container from './components/Container';
import ButtonPage from './components/ButtonPage';

export const NumberContext = React.createContext(0)

function App() {
  const [counter, setCounter] = useState<number>(0);

  const updateCounter = () => {
    setCounter((prevstate) => prevstate + 1)
    return 'good job'
  }

  console.log(counter);

  return (
    <ThemeProvider theme={myTheme}>
      <Container>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button onClick={updateCounter}>Learn React {counter}</Button>
          
      </Container>

      <NumberContext.Provider value={counter}>
        <ButtonPage />
      </NumberContext.Provider>
    </ThemeProvider>
  );
}

export default App;
