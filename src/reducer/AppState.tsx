import { func, object } from 'prop-types'
import { createContext, ReactNode, useContext, useReducer } from 'react'
import { Action, State } from './Reducers'

const Context = createContext(undefined as any)

export const AppStateProvider = ({
  reducer,
  initialState = {},
  children,
}: {
  reducer: any
  initialState: {}
  children: ReactNode
}) => {
  const value = useReducer(reducer, initialState)

  return <Context.Provider value={value}>{children}</Context.Provider>
}

AppStateProvider.propTypes = {
  reducer: func,
  initialState: object,
}

export const useAppState = (): [
  state: State,
  dispatch: (action: Action) => void
] => {
  return useContext(Context)
}
