import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 0 15px;
`;
export const Spinner = styled.ActivityIndicator`
  padding-top: 15px;
`;

// Product  List
export const ListItem = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: ${props => props.selectedLayout};
  margin-bottom: 15px;
`;
export const ListImage = styled.Image`
  height: 70px;
  width: 70px;
`;
export const ListItemName = styled.Text`
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 15px;
  font-size: 15px;
  text-align: ${props => (props.selectedLayout === 'column' ? 'center' : 'left')};
`;

// Product Details
export const H2Text = styled.Text`
  margin: 10px 0 20px;
  font-size: 25px;
  font-weight: 600;
  color: #000;
`;
export const DetailsImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: 0 auto 10px;
`;
export const DetailsText = styled.Text`
  font-size: 20px;
  margin-bottom: 15px;
`;

// Layout Switcher
export const SwitcherView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px 0;
  margin-bottom: 10px;
`;
export const SwitcherImage = styled.Image`
  width: 40px;
  height: 40px;
  margin: 0 10px;
`;
