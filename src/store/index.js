import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

import reducer from '../reducers'

const persistConfig = {
  key: 'root',
  storage: storageSession
}

const logger = createLogger({
  collapsed: true
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(logger)
)

export const persistor = persistStore(store)

export default store