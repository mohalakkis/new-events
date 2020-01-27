import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

const PaddingContainer = styled.KeyboardAvoidingView`
  padding-horizontal: 10px;
  padding-vertical: 20px;
    
`;

const PageContainer = ({ children }) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <PaddingContainer>
      {children}
    </PaddingContainer>
  </ScrollView>
);
PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
