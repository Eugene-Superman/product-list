import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { SwitcherView, SwitcherImage } from '../../styles';

const listImage = require('../../assets/img/list.png');
const gridImage = require('../../assets/img/grid.png');

export default function LayoutSwitcher(props) {
  return (
    <SwitcherView>
      <TouchableNativeFeedback onPress={() => props.selectLayout('row')}>
        <SwitcherImage source={listImage} />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => props.selectLayout('column')}>
        <SwitcherImage source={gridImage} />
      </TouchableNativeFeedback>
    </SwitcherView>
  );
}
