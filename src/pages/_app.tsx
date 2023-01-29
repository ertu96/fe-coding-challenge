import Layout from '@/components/layout/Layout'
import { AppStateProvider } from '@/reducer/AppState'
import { combineReducers, initialState } from '@/reducer/Reducers'
import { shoppingCartReducer } from '@/reducer/ShoppingCartReducer'
import '@/styles/main.css'
import type { AppProps } from 'next/app'
import { memo } from 'react'

const appReducers = combineReducers({
  shoppingCart: shoppingCartReducer,
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppStateProvider initialState={initialState} reducer={appReducers}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppStateProvider>
  )
}

export default memo(App)
