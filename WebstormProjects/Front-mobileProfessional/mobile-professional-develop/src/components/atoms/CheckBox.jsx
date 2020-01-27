// import { getPxString } from '../../constants/size';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';
import { colors } from '../../constants/theme';

const ButtonCheckBox = ({ title }) => {
  const [checked, setChecked] = useState(false);
  return (
    <CheckBox
      checked={checked}
      checkedColor={colors.base}
      containerStyle={{ backgroundColor: 'transparent' }}
      onPress={() => setChecked(!checked)}
      size={30}
      title={title}
      color={colors.base}
      uncheckedColor={colors.base}
      textStyle={{
        color: colors.base,
      }}
    />
  );
};

ButtonCheckBox.propTypes = {
  title: PropTypes.string.isRequired,
};
export default ButtonCheckBox;
