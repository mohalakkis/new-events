import { PixelRatio } from 'react-native';

export const getPx = (nativeUnit) => {
  if (nativeUnit) {
    return PixelRatio.getPixelSizeForLayoutSize(nativeUnit);
  }
  return 0;
};

export const getPxString = (nativeUnit) => {
  if (nativeUnit) {
    return `${PixelRatio.getPixelSizeForLayoutSize(nativeUnit)}px`;
  }
  return '0';
};
