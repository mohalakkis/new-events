/* eslint-disable import/no-extraneous-dependencies,react/jsx-filename-extension */
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import CheckBox from '../../src/components/atoms/CheckBox';

addDecorator(withKnobs);
storiesOf('CheckBox', module)
  .add('with text', () => (
    <CheckBox />
  ));
