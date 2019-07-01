import React from 'react';
import { FlatList, TouchableNativeFeedback } from 'react-native';
import { ListImage, ListItemName, ListItem } from '../../styles';

export default function ProductList(props) {
  const { layout, onPress, productInformation } = props;
  return (
    <FlatList
      data={productInformation}
      numColumns={layout === 'column' ? 2 : 1}
      key={layout}
      renderItem={({ item }) => (
        <TouchableNativeFeedback onPress={() => onPress(item)}>
          <ListItem selectedLayout={layout}>
            <ListImage source={{ uri: item.imgSrc }} resizeMode="contain" />
            <ListItemName selectedLayout={layout}>{item.name}</ListItemName>
          </ListItem>
        </TouchableNativeFeedback>
      )}
    />
  );
}
