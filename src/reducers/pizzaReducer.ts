import { PizzaAction, PizzaActionType } from '../@types/actions';
import { PizzaState } from '../@types/state';

const pizzaReducer = (state: PizzaState, action: PizzaAction) => {
  switch (action.type) {
    case PizzaActionType.ADD_BASE:
      const newState = {
        ...state,
        pizza: {
          base: action.payload,
          toppings: state.pizza.toppings,
        },
      };
      console.log('newState', newState);
      return {
        ...state,
        pizza: {
          base: action.payload,
          toppings: state.pizza.toppings,
        },
      };
    case PizzaActionType.ADD_TOPPING:
      return {
        ...state,
        pizza: {
          ...state.pizza,
          toppings: [...state.pizza.toppings, action.payload],
        },
      };
    case PizzaActionType.REMOVE_TOPPING:
      return {
        ...state,
        pizza: {
          ...state.pizza,
          toppings: state.pizza.toppings.filter(
            topping => topping !== action.payload
          ),
        },
      };
    // case PizzaActionType.CLEAR_PIZZA:
    //   return {
    //     ...state,
    //     pizza: {
    //       base: '',
    //       toppings: [],
    //     },
    //   };
    default:
      return state;
  }
};

export default pizzaReducer;
