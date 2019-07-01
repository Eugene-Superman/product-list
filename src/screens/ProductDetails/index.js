import React, { Component } from 'react';
import {
  Container, H2Text, DetailsImage, DetailsText
} from '../../styles';

export default class ProductDetails extends Component {
  static navigationOptions = {
    title: 'Product Details',
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <H2Text>{params.name}</H2Text>
        <DetailsImage source={{ uri: params.imgSrc }} resizeMode="contain" />
        <DetailsText>{params.fullDescription}</DetailsText>
      </Container>
    );
  }
}
