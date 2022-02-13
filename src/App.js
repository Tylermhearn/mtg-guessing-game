import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import SignUp from './components/SignUp'
import LoginScreen from './components/LoginScreen'
import Header from './components/Header'
import Home from './components/Home'
import history from './history'
import store from './store'

const NotFound = () => <div>Not Found</div>

const AppContent = () => {
  return (
    <BrowserRouter history={history}>
      <Header />
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App;
