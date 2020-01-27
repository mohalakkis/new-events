import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { getPxString } from '../../constants/size';
import DefaultLabel from '../atoms/DefaultLabel';

const StyledInput = styled.TextInput`
  border-bottom-width: ${getPxString(1)};
  border-bottom-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.light};
  font-size: ${getPxString(11)};
  padding: 0;
  height: 27px;
`;

const InputTextTest = ({ title, keyboardType, returnKeyType }) => (
  <View>
    <DefaultLabel>{title}</DefaultLabel>
    <StyledInput
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
    />
  </View>
);
InputTextTest.propTypes = {
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string,
  title: PropTypes.string.isRequired,
};
InputTextTest.defaultProps = {
  keyboardType: 'default',
  returnKeyType: 'default',
};


export default InputTextTest;
