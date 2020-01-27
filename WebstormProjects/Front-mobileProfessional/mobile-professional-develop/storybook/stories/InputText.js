/* eslint-disable import/no-extraneous-dependencies,react/jsx-filename-extension */
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import InputText from '../../src/components/molecules/InputText';

addDecorator(withKnobs);
storiesOf('InputText', module)
  .add('with text', () => (
    <InputText />
  ));
