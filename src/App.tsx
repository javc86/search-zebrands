import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from './store';
import Nav from './Nav';
import Header from './components/Header';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className="App">
          <Nav />
        </main>
      </BrowserRouter>
    </Provider>
  );
}
