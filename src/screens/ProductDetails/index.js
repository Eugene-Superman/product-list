import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

export default class ProductDetails extends Component {
  static navigationOptions = {
    title: 'Product Details',
  };

  render() {
    let detailInformation = this.props.navigation.state.params;
    return(
      <View>
        <Text>{detailInformation.name}</Text>
        <Image style={{width: 66, height: 58}} source={{ uri: detailInformation.imgSrc}}/>
        <Text>{detailInformation.fullDescription}</Text>
      </View>
    )
  }
}
