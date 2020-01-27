import styled from 'styled-components';
import { getPxString } from '../../constants/size';

const TextFormat = styled.Text`
  color: ${({ theme }) => theme.colors.base};
  font-size: ${getPxString(25)};
  margin-bottom: ${getPxString(20)};
`;

export default TextFormat;
