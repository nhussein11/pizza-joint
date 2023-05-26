import { AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Base, Header, Home, Order, Toppings } from './components';
import { PizzaContext } from './context/pizzaProvider';

const App = () => {
  const location = useLocation();
  const { pizzaState } = useContext(PizzaContext);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/base" element={<Base />} />
          <Route path="/toppings" element={<Toppings />} />
          <Route path="/order" element={<Order />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
