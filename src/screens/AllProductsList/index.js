import React, { Component } from 'react';
import { FlatList, Text, View, ActivityIndicator} from 'react-native';
import ProductList from '../../components/ProductList';
import LayoutSwitcher from '../../components/LayoutSwitcher';

import firebase from 'react-native-firebase'
import { thisExpression } from '@babel/types';

export default class AllProductsList extends Component {
  static navigationOptions = {
    title: 'All Products',
  };

  state = { 
    productsData: null, 
    selectedLayout: 'row', 
    isLoaded: false
  }

  getProducts = () => {
    firebase.firestore().collection('products').get()
    .then((snapShot)=>{ 
      this.setState({
        productsData: snapShot.docs.map(el=>el.data()),
        isLoaded: true,
        gridLayout: ProductList
      }) 
    }).catch((err)=>{
      console.log( err);
    })
  }

  showDetails = (selectedItem) => {
    this.props.navigation.navigate('Details', selectedItem);
  }

  selectLayout = (val) => {
    this.setState({selectedLayout: val})
  }

  componentDidMount = () => {
    this.getProducts();
  }  

  render() {
    if (!this.state.isLoaded) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    }
    return(
      <View>
        <LayoutSwitcher selectLayout={this.selectLayout}/>
        <ProductList
        layout={this.state.selectedLayout}
         onPress={this.showDetails}
         productInformation={this.state.productsData} 
        />
      </View>
    )
  }
}

