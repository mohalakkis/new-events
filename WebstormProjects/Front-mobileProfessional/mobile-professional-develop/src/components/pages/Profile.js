import React, { useState } from 'react';
import DateInput from '../organisms/DateInput';
import Input from '../molecules/InputText';
import PageContainer from '../atoms/PageContainer';
import Spacer from '../atoms/Spacer';

const Profile = () => {
  const [cpf, setCPF] = useState('');
  const maskCPF = (text) => {
    const masked = text.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    // console.warn(masked);
    setCPF(masked);
  };
  return (
    <PageContainer>
      <Input title="SEU NOME COMPLETO" returnKeyType="go" />
      <Spacer size={15} />
      <DateInput title="NASCIMENTO" returnKeyType="go" />
      <Spacer size={15} />
      <Input
        title="CPF"
        value={cpf}
        keyboardType="numeric"
        returnKeyType="go"
        onChange={maskCPF}
      />
      <Spacer size={15} />
      <Input title="RG / IDENTIDADE" returnKeyType="go" />
      <Spacer size={15} />
      <Input title="NOME SOCIAL / APELIDO" returnKeyType="go" />
      <Spacer size={15} />
      <Input title="CELULAR" keyboardType="phone-pad" returnKeyType="go" />
      <Spacer size={15} />
      <Input title="e-mail" keyboardType="email-address" returnKeyType="go" />
    </PageContainer>
  );
};

export default Profile;
