import React, { Component } from 'react';
import { View, Image, TouchableNativeFeedback } from 'react-native';

export default class LayoutSwitcher extends Component {

  render() {
    return(
     <View>
       <TouchableNativeFeedback>
        <Image source={require('../../assets/img/list.png')}/>
       </TouchableNativeFeedback>
     </View>
    )
  }
}