import { createContext, useReducer } from 'react';
import { PizzaContextType, PizzaState } from '../@types/state';
import pizzaReducer from '../reducers/pizzaReducer';
import { PizzaActionType } from '../@types/actions';

export const PizzaContext = createContext({} as PizzaContextType);

const PizzaProvider = ({ children }: any) => {
  const pizzaState: PizzaState = {
    pizza: {
      base: '',
      toppings: [],
    },
  };

  const [state, dispatch] = useReducer(pizzaReducer, pizzaState);

  const addBase = (base: string) => {
    dispatch({ type: PizzaActionType.ADD_BASE, payload: base });
  };

  const handleTopping = (topping: string) => {
    dispatch({ type: PizzaActionType.HANDLE_TOPPING, payload: topping });
  };

  const clearPizza = () => {
    dispatch({ type: PizzaActionType.CLEAR_PIZZA });
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzaState: state,
        addBase,
        handleTopping,
        clearPizza,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
