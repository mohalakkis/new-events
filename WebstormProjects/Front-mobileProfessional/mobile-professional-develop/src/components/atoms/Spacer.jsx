import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Spacer = ({ size, vertical }) => {
  const style = {};
  const usedSize = size || 10;

  if (vertical) {
    style.height = 1;
    style.width = usedSize;
  } else {
    style.height = usedSize;
    style.width = 1;
  }

  return (
    <View style={style} />
  );
};
Spacer.propTypes = {
  size: PropTypes.number.isRequired,
  vertical: PropTypes.bool,
};
Spacer.defaultProps = {
  vertical: false,
};

export default Spacer;
