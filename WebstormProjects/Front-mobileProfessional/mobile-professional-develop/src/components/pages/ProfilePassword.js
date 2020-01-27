import React from 'react';
import PageContainer from '../atoms/PageContainer';
import InputPassword from '../molecules/InputText';
import Spacer from '../atoms/Spacer';

const Profile = () => (
  <PageContainer>
    <InputPassword title="DIGITE A SENHA" keyboardType="visible-password" />
    <Spacer size={15} />
    <InputPassword title="CONFIRME A SENHA" keyboardType="visible-password" />
  </PageContainer>
);

export default Profile;
