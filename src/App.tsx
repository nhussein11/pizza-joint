import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Base, Header, Home, Order, Toppings } from "./components";

type Pizza = {
  base: string;
  toppings: string[];
};

function App() {
  const [pizza, setPizza] = useState<Pizza>({ base: "", toppings: [] });

  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping: string) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item: string) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route path="/order" element={<Order pizza={pizza} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
