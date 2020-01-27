import React, { useState } from 'react';
import PageContainer from '../atoms/PageContainer';
import CardAddress from '../atoms/CardAddress';
import ItemButton from '../atoms/ItemButton';
import DefaultText from '../atoms/DefaultText';
import Spacer from '../atoms/Spacer';
import AddressModal from '../organisms/AddressModal';

const address = {
  base: 'Rua Santo Antônio do Descoberto, 000',
  city: 'Qd. 8 Lt. 25B, Cond. Res Mauá, Apto G-176',
  zipCode: 'st. Mauá, Rio de Janeiro / RJ, CEP 78.987-546',
};
const Profile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <PageContainer>
      <DefaultText>
        Adicione aqui seu endereço
        residencial e o endereço  do ponto de
        referência de onde irá sair para atendimentos
      </DefaultText>
      <Spacer size={20} />
      <DefaultText title="RESIDENCIAL" />
      <Spacer size={5} />
      <CardAddress address={address} />
      <Spacer size={20} />
      <DefaultText title="PONTOS DE REFERÊNCIA" />
      <Spacer size={5} />
      <ItemButton isAdding onPress={() => setModalIsOpen(true)} />
      <AddressModal show={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
    </PageContainer>
  );
};

export default Profile;
