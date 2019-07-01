import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import ProductList from '../../components/ProductList';
import LayoutSwitcher from '../../components/LayoutSwitcher';
import { Container, Spinner } from '../../styles';

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
      .then((snapShot) => {
        this.setState({
          productsData: snapShot.docs.map(el => el.data()),
          isLoaded: true
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showDetails = (selectedItem) => {
    const { navigation } = this.props;
    navigation.navigate('Details', selectedItem);
  }

  selectLayout = (val) => {
    this.setState({ selectedLayout: val });
  }

  componentDidMount = () => {
    this.getProducts();
  }

  render() {
    const { isLoaded, selectedLayout, productsData } = this.state;
    if (!isLoaded) {
      return (
        <Spinner />
      );
    }
    return (
      <Container>
        <LayoutSwitcher selectLayout={this.selectLayout} />
        <ProductList
          layout={selectedLayout}
          onPress={this.showDetails}
          productInformation={productsData}
        />
      </Container>
    );
  }
}
