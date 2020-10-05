import React from 'react';
import AppRouter from './app/router';
import { StateProvider } from './app/context';
import './App.scss';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';

const App = () => {
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

  const alertTemplate = ({ message, options, style, close }: any) => {
    return (
      <div className="alert">
        {message}
      </div>
    )
  }

  return (
    <StateProvider>
      <AlertProvider template={alertTemplate} {...options}>
        <AppRouter />
      </AlertProvider>
    </StateProvider>
  );
}

export default App;
