import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/theme';
import EditorStore from './store/EditorStore';
import SiteStore from './store/SiteStore';


export const AppContext = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext.Provider value={{
      user: new UserStore(),
      editor: new EditorStore(),
      site: new SiteStore()
    }}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </AppContext.Provider>
  </React.StrictMode>
);