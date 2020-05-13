/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/shared/Header';
import RentalHome from './pages/RentalHome';

// Explaining how everyhing works (:
const App = () => {
  return (
    <div>
      <Header />
      <RentalHome />
    </div>
  )
}

export default App;

import React from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { initStore } from './store';
/*eslint-disable-next-line
//import { ToastContainer } from 'react-toastify';
const store = initStore();
const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  )
}

export default App;

import React, { useEffect } from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { AuthProvider, useAuth } from 'providers/AuthProvider';
//import { MapProvider } from 'providers/MapProvider';
import { initStore } from './store';

import { ToastContainer } from 'react-toastify';

const store = initStore();

const Providers = ({children}) => 
  <Provider store={store}>
    <AuthProvider>
     
    </AuthProvider>
  </Provider>

const BwmApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService])

  return (
    <Router>
      <Header logout={authService.signOut} />
      <Routes />
    </Router>
  )
}

const App = () => {
  return (
    <Providers>
      <ToastContainer />
      <BwmApp />
    </Providers>
  )
}

export default App;


/*import React from 'react';
import Header from './components/shared/Header';
import RentalHome from './pages/RentalHome';

// Explaining how everyhing works (:
const App = () => {
  return (
    <div>
      <Header />
      <RentalHome />
    </div>
  )
}
export default App;

import React, { useEffect } from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { AuthProvider, useAuth } from 'providers/AuthProvider';
//import { MapProvider } from 'providers/MapProvider';
import { initStore } from './store';

import { ToastContainer } from 'react-toastify';

const store = initStore();

const Providers = ({children}) => 
  <Provider store={store}>
    <AuthProvider>
     
    </AuthProvider>
  </Provider>

const BwmApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService])

  return (
    <Router>
      <Header logout={authService.signOut} />
      <Routes />
    </Router>
  )
}

const App = () => {
  return (
    <Providers>
      <ToastContainer />
      <BwmApp />
    </Providers>
  )
}

export default App;

import React, { useEffect } from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
//import { Provider } from 'react-redux'
//import { AuthProvider, useAuth } from 'providers/AuthProvider';
//import { MapProvider } from 'providers/MapProvider';
import { initStore } from './store';

import { ToastContainer } from 'react-toastify';

const store = initStore();



/*const BwmApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService])

  return (
    <Router>
      <Header logout={authService.signOut} />
      <Routes />
    </Router>
  )
}

const App = () => {
  return (
    /*<Providers>
      <ToastContainer />
      <BwmApp />
    </Providers>
  )
}

export default App;

import React, { useEffect } from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { AuthProvider, useAuth } from 'providers/AuthProvider';
import { MapProvider } from 'providers/MapProvider';
import { initStore } from './store';

import { ToastContainer } from 'react-toastify';

const store = initStore();

const Providers = ({children}) => 
  <Provider store={store}>
    <AuthProvider>
  <MapProvider apiKey="Rukxk4n6MVk8oILY0HUJAmAAvAiMM1XJ">
        {children}
      </MapProvider>
    </AuthProvider>
  </Provider>

const BwmApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService])

  return (
    <Router>
      <Header logout={authService.signOut} />
      <Routes />
    </Router>
  )
}

const App = () => {
  return (
    <Providers>
      <ToastContainer />
      <BwmApp />
    </Providers>
  )
}

export default App;
import React from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { initStore } from './store';

const store = initStore();
const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  )
}

export default App;

import React, { useEffect } from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { AuthProvider, useAuth } from 'providers/AuthProvider';
import { MapProvider } from 'providers/MapProvider';
import { initStore } from './store';

import { ToastContainer } from 'react-toastify';

const store = initStore();

const Providers = ({children}) => 
  <Provider store={store}>
    <AuthProvider>
      <MapProvider apiKey="Rukxk4n6MVk8oILY0HUJAmAAvAiMM1XJ">
        {children}
      </MapProvider>
    </AuthProvider>
  </Provider>

const BwmApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService])

  return (
    <Router>
      <Header logout={authService.signOut} />
      <Routes />
    </Router>
  )
}

const App = () => {
  return (
    <Providers>
      <ToastContainer />
      <BwmApp />
    </Providers>
  )
}

export default App;

import React, { useEffect } from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { AuthProvider, useAuth } from 'providers/AuthProvider';
import { MapProvider } from 'providers/MapProvider';
import { initStore } from './store';

import { ToastContainer } from 'react-toastify';

const store = initStore();

const Providers = ({children}) => 
  <Provider store={store}>
    <AuthProvider>
      <MapProvider apiKey="Rukxk4n6MVk8oILY0HUJAmAAvAiMM1XJ">
        {children}
      </MapProvider>
    </AuthProvider>
  </Provider>

const BwmApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService])

  return (
    <Router>
      <Header logout={authService.signOut} />
      <Routes />
    </Router>
  )
}

const App = () => {
  return (
    <Providers>
      <ToastContainer />
      <BwmApp />
    </Providers>
  )
}

export default App;*/

import React from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { initStore } from './store';

const store = initStore();
const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  )
}

export default App;