import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/ CssModules';
import { StyledJsx } from './components/StyledJsx';

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}

export default App;
