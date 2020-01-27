import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Minus from '../../../assets/images/logo.png';
import Plus from '../../../assets/images/plus.png';

const FloatingImage = styled.Image`
  height: 25px;
  resizeMode: contain;
  width: 25px;
`;

const ButtonArea = styled.TouchableOpacity`
  padding: 5px;
`;

const ItemButton = ({ onPress, isAdding }) => (
  <ButtonArea onPress={onPress}>
    <FloatingImage source={isAdding ? Plus : Minus} />
  </ButtonArea>
);
ItemButton.propTypes = {
  onPress: PropTypes.func,
  isAdding: PropTypes.bool,
};
ItemButton.defaultProps = {
  onPress: () => null,
  isAdding: false,
};


export default ItemButton;
