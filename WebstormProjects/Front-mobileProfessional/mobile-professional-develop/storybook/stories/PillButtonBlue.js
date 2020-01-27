/* eslint-disable import/no-extraneous-dependencies,react/jsx-filename-extension */
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import PillButtonBlue from '../../src/components/atoms/PillButtonBlue';

addDecorator(withKnobs);
storiesOf('PillButtonBlue', module)
  .add('with text', () => (
    <PillButtonBlue />
  ));
