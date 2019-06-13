/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, View} from 'react-native';
import Router from './Routers/routerManager';
import LoadingScreen from "./Component/Modal/LoadingScreen/loadingScreen";

export default class App extends Component<Props> {

  render() {
    return (
      <View style={{flex:1}}>
        <Router/>
        <LoadingScreen/>
      </View>
    );
  }
}
