import React from 'react';
import { GlobalStateProvider } from './utils/state';
import './App.css';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <Grid />
    </ GlobalStateProvider>
  );
}

export default App;
