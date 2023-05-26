import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import PizzaProvider from './context/pizzaProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </Router>
  </React.StrictMode>
);
