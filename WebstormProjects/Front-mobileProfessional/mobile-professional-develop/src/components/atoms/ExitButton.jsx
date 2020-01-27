import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getPxString } from '../../constants/size';


const InternalText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${getPxString(15)} ;

`;
const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.contrast};
  borderRadius: 50;
  height: ${getPxString(30)};
  justify-content: center;
  padding: ${getPxString(10)};
  position: absolute;
  right: ${getPxString(-9)}; 
  top: ${getPxString(-5)};
`;

const ExitButton = ({ onPress, children }) => (
  <Container activeOpacity={0.7} onPress={onPress}>
    <InternalText>{children}</InternalText>
  </Container>
);

ExitButton.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
};

ExitButton.defaultProps = {
  children: '',
  onPress: () => null,
};
export default ExitButton;
