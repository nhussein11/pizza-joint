import { PizzaAction, PizzaActionType } from '../@types/actions';
import { PizzaState } from '../@types/state';

const pizzaReducer = (state: PizzaState, action: PizzaAction): PizzaState => {
  switch (action.type) {
    case PizzaActionType.ADD_BASE:
      if (typeof action.payload !== 'string') {
        return state;
      }
      if (state.pizza.base === action.payload) {
        return state;
      }
      return {
        ...state,
        pizza: {
          base: action.payload,
          toppings: state.pizza.toppings,
        },
      };
    case PizzaActionType.HANDLE_TOPPING:
      if (typeof action.payload !== 'string') {
        return state;
      }
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

    case PizzaActionType.CLEAR_PIZZA:
      return {
        ...state,
        pizza: {
          base: '',
          toppings: [],
        },
      };

    default:
      return state;
  }
};

export default pizzaReducer;
