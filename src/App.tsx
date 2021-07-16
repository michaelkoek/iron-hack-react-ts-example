import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { mainTheme } from './utils/theme';
import Container from './components/Container';
import Button from './components/Button';

function App() {

  const [counter, setCounter] = useState<number>(0)

  return (
    <ThemeProvider theme={mainTheme}>
    <Container>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={() => setCounter(prevState => prevState + 1)}>
          Learn React {counter}
        </Button>
      </header>
    </Container>
    </ThemeProvider>
  );
}

export default App;
