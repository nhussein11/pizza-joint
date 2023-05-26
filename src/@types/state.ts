export type PizzaState = {
  pizza: {
    base: string;
    toppings: string[];
  };
};

export type PizzaContextType = {
  pizzaState: PizzaState;
  addBase: (base: string) => void;
  handleTopping: (topping: string) => void;
  clearPizza: () => void;
};
