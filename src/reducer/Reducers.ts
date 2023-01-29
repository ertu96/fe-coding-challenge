import { Burger } from '@/interfaces/Burger'
import { ShoppingCartActions } from './ShoppingCartReducer'

export type Action = {
  type: ShoppingCartActions
  name?: string | number
  value?: string | number | boolean
  payload?: any
}

export type State = {
  shoppingCart: Burger[]
}

const initialState: State = {
  shoppingCart: [],
}

const combineReducers = (reducers: any) => {
  return (state: State, action: Action) => {
    return Object.keys(reducers).reduce((acc: any, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      }
    }, state)
  }
}

export { initialState, combineReducers }
