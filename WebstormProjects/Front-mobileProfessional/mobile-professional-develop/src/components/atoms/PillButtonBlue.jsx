import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getPxString } from '../../constants/size';


const Container = styled.TouchableOpacity`
  border-radius: ${getPxString(40)};
  background-color: ${({ theme }) => theme.colors.base};
  padding: ${getPxString(5)};
`;

const InternalText = styled.Text`
  font-size: ${getPxString(15)} ; 
  color: ${({ theme }) => theme.colors.white}; 
  text-align: center;
`;

const PillButtonBlue = ({ onPress, children }) => (
  <Container activeOpacity={0.7} onPress={onPress}>
    <InternalText>{children}</InternalText>
  </Container>
);

PillButtonBlue.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.string,
};
PillButtonBlue.defaultProps = {
  onPress: () => null,
  children: '',
};

export default PillButtonBlue;
