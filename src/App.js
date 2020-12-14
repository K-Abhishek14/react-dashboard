import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Routers from './Routers';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider> 
  )
}
export default App;