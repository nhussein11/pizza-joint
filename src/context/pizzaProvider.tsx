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
    console.log('fromr reducer');
    dispatch({ type: PizzaActionType.ADD_BASE, payload: base });
    console.log('after reducer');
  };

  const addTopping = (topping: string) => {
    dispatch({ type: PizzaActionType.ADD_TOPPING, payload: topping });
  };

  const removeTopping = (topping: string) => {
    dispatch({ type: PizzaActionType.REMOVE_TOPPING, payload: topping });
  };

  // const clearToppings = () => {
  //   dispatch({ type: PizzaActionType.CLEAR_TOPPINGS });
  // };
  //
  const clearPizza = () => {
    dispatch({ type: PizzaActionType.CLEAR_PIZZA });
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzaState: state,
        addBase,
        addTopping,
        removeTopping,
        clearPizza,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
