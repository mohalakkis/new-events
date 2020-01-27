import styled from 'styled-components';
import { getPxString } from '../../constants/size';

const TextFormat = styled.Text`
  border-bottom-width: ${getPxString(1)};
  border-bottom-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.light};
  font-size: ${getPxString(11)};
  padding: 0;
  height: 27px;
`;

export default TextFormat;
