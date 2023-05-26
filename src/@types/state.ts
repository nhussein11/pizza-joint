export type PizzaState = {
  pizza: {
    base: string;
    toppings: string[];
  };
};

export type PizzaContextType = {
  pizzaState: PizzaState;
  addBase: (base: string) => void;
  addTopping: (topping: string) => void;
  removeTopping: (topping: string) => void;
  clearPizza: () => void;
};
