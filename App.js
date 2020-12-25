/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Containers from './src/Container';
import { Provider } from 'react-redux';
import { configureStore } from './src/store';
//const store = configureStore();
const store = configureStore();
const App: () => React$Node = () => {
  return (
      <Provider store={store}>
        <Containers />
      </Provider>

  );
};





export default App;
