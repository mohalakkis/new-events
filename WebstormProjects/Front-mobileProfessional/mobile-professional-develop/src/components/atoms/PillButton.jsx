import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getPxString } from '../../constants/size';


const Container = styled.TouchableOpacity`
  border-radius: ${getPxString(40)};
  background-color: ${({ theme }) => theme.colors.contrast};
  padding: ${getPxString(5)};
`;

const InternalText = styled.Text`
  font-size: ${getPxString(15)} ; 
  color: ${({ theme }) => theme.colors.white}; 
  text-align: center;
`;

// eslint-disable-next-line react/prop-types
const PillButtonBlue = ({ onPress, title }) => (
  <Container activeOpacity={0.7} onPress={onPress}>
    <InternalText>{title}</InternalText>
  </Container>
);

PillButtonBlue.propTypes = {
  onPress: PropTypes.func,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.string,
};
PillButtonBlue.defaultProps = {
  onPress: () => null,
  children: '',
};

export default PillButtonBlue;
