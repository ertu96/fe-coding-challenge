import { Action, State } from './Reducers'

export enum ShoppingCartActions {
  ADD_BURGER = 'ADD_BURGER',
  REMOVE_BURGER = 'REMOVE_BURGER',
}

export const shoppingCartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ShoppingCartActions.ADD_BURGER: {
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      }
    }
    case ShoppingCartActions.REMOVE_BURGER: {
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (_burger, index) => index !== action.payload
        ),
      }
    }
    default:
      return state
  }
}
