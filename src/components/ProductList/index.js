import React, { Component } from 'react';
import { FlatList, Text, View, Image, TouchableNativeFeedback } from 'react-native';
import LayoutSwitcher from '../LayoutSwitcher'

export default class ProductList extends Component {
  selectItem = this.props.onPress

  render() {
    let {layout} = this.props;
    return(
      <View>
        <LayoutSwitcher />
        <FlatList
          data={this.props.productInformation}
          numColumns={layout == 'column'? 2: 1}        
          keyExtractor={(item)=>item.key}
          renderItem={({item}) =>
            <TouchableNativeFeedback onPress={()=> this.selectItem(item)}> 
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