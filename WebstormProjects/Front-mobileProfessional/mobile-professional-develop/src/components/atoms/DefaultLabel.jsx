import styled from 'styled-components';
import { getPxString } from '../../constants/size';

const DefaultLabel = styled.Text`
  color: ${({ theme }) => theme.colors.base};
  font-size: ${getPxString(12)};
  text-transform: uppercase;
 `;

export default DefaultLabel;
