import { PizzaAction, PizzaActionType } from '../@types/actions';
import { PizzaState } from '../@types/state';

const pizzaReducer = (state: PizzaState, action: PizzaAction) => {
  switch (action.type) {
    case PizzaActionType.ADD_BASE:
      return {
        ...state,
        pizza: {
          base: action.payload,
          toppings: state.pizza.toppings,
        },
      };
    case PizzaActionType.HANDLE_TOPPING:
      if (state.pizza.toppings.includes(action.payload)) {
        const newToppings = state.pizza.toppings.filter(
          topping => topping !== action.payload
        );

        return {
          ...state,
          pizza: {
            ...state.pizza,
            toppings: newToppings,
          },
        };
      }

      return {
        ...state,
        pizza: {
          ...state.pizza,
          toppings: [...state.pizza.toppings, action.payload],
        },
      };
    default:
      return state;
  }
};

export default pizzaReducer;
