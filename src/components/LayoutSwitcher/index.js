import React, { Component } from 'react';
import { TouchableNativeFeedback, Image, View } from 'react-native';

export default class LayoutSwitcher extends Component {
  render() {
    return(
      <View style={{flexDirection: 'row'}}>
        <TouchableNativeFeedback onPress={()=>this.props.selectLayout('row')}>
          <Image style={{width: 50, height: 50}} source={require('../../assets/img/list.png')}/>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=>this.props.selectLayout('column')}>
          <Image style={{width: 50, height: 50}} source={require('../../assets/img/grid.png')}/>
        </TouchableNativeFeedback>
      </View>
    )
  }
}