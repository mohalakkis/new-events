/* eslint-disable import/no-extraneous-dependencies,react/jsx-filename-extension */
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import PillButton from '../../src/components/atoms/PillButton';

addDecorator(withKnobs);
storiesOf('PillButton', module)
  .add('with text', () => (
    <PillButton />
  ));
