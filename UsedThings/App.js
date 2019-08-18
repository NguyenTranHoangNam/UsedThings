/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ScreenA from "./src/view/screenA/screenA";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import initStore from "./src/config/store/initStore";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./src/config/rootSagas/rootSagas";
import { rootReducers } from "./src/config/reducers/rootReducers";

const saga = createSagaMiddleware()
const store = createStore(rootReducers,applyMiddleware(saga));

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <ScreenA />
        </Provider>
      </View>
    );
  }
}
saga.run(rootSaga)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
