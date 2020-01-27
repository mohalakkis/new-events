import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import styled from 'styled-components';
import Spacer from './Spacer';
import ItemButton from './ItemButton';

const TextContent = styled.Text`
  color:${({ theme }) => theme.colors.base};
`;

const CardAddress = ({ address }) => (
  <Card wrapperStyle={{ flexDirection: 'row' }} containerStyle={{ margin: 0, padding: 10 }}>
    <ItemButton />
    <Spacer size={10} vertical />
    <View style={{ padding: 10 }}>
      <TextContent style={{ fontWeight: 'bold', fontSize: 12 }}>{address.base}</TextContent>
      <Spacer size={10} vertical />
      <TextContent style={{ fontSize: 12 }}>{address.city}</TextContent>
      <TextContent style={{ fontSize: 12 }}>{address.zipCode}</TextContent>
    </View>
  </Card>
);
CardAddress.propTypes = {
  address: PropTypes.object.isRequired,
};

export default CardAddress;
