// client/src/App.js
import React from 'react';
import Header from './components/Header'; // Import Header
import Main from './components/Main'; // Import Header
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
  
};

export default App;