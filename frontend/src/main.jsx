import './index.css'
import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { Toaster } from './components/ui/sonner'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      <Toaster />
    </Provider>
  </React.StrictMode>,
)