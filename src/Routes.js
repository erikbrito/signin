import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './Pages/Home/home'

import { Provider } from 'react-redux'
import { store } from './Redux/Store'

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact component={Home} path='/' />
      </BrowserRouter>
    </Provider>
  )
}

export default Routes