import React from 'react';
import {LogBox} from 'react-native';
import Containers from './src/Container';
import {Provider} from 'react-redux';
import {configureStore} from './src/store';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
const store = configureStore();
const App: () => React$Node = () => {
  return (
      <Provider store={store}>
        <Containers />
      </Provider>

  );
};





export default App;
