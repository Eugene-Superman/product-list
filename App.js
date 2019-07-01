/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AllProductsList from './src/screens/AllProductsList';
import ProductDetails from './src/screens/ProductDetails';

const AppNavigator = createStackNavigator({
  Home: AllProductsList,
  Details: ProductDetails
});

const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
