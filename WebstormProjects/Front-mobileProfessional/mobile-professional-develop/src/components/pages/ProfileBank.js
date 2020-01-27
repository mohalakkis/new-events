import React from 'react';
import PageContainer from '../atoms/PageContainer';
import CheckBox from '../atoms/CheckBox';
import Input from '../molecules/InputText';
import Spacer from '../atoms/Spacer';
import Row from '../atoms/Row';

const Profile = () => (
  <PageContainer>
    <Row>
      <CheckBox title="Conta Corrente" />
      <CheckBox title="Conta Poupança" />
    </Row>
    <Input title="N°BANCO" keyboardType="numeric" />
    <Spacer size={15} />
    <Input title="BANCO" />
    <Spacer size={15} />
    <Input title="AGÊNCIA" keyboardType="numeric" />
    <Spacer size={15} />
    <Input title="CONTA" keyboardType="numeric" />
    <Spacer size={15} />
    <Input title="OPERAÇÃO (CAIXA ECONÔMICA)" />
    <Spacer size={15} />
    <Input title="ESTADO UF" />
    <Spacer size={15} />
    <Input title="CIDADE" />
  </PageContainer>

);

export default Profile;
