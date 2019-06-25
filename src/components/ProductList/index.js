import React, { Component } from 'react';
import { FlatList, Text, View, Image, TouchableNativeFeedback } from 'react-native';
export default class ProductList extends Component {
  render() {
    let { layout } = this.props;
    let selectItem = this.props.onPress;
    return(
      <View>
        <FlatList
          data={this.props.productInformation}
          numColumns={layout == 'column'? 2: 1} 
          key={layout}
          renderItem={({item}) =>
            <TouchableNativeFeedback onPress={() => selectItem(item)}> 
              <View style={{flex:1, flexDirection: layout}}>
                <Image style={{width: 66, height: 58}} source={{ uri: item.imgSrc}}/>
                <Text>{item.name}</Text>
              </View>
            </TouchableNativeFeedback>
          }
        />
      </View>
    )
  }
}