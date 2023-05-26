export interface PizzaAction {
  type: PizzaActionType;
  payload?: string | string[];
}

export const enum PizzaActionType {
  ADD_BASE,
  HANDLE_TOPPING,
  CLEAR_PIZZA,
}

export interface ModalAction {
  type: ModalActionType;
  payload?: boolean;
}

export const enum ModalActionType {
  SHOW_MODAL,
  HIDE_MODAL,
}
