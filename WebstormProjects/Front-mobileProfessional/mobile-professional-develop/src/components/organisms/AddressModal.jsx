import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputText from '../molecules/InputText';
import DefaultTitle from '../atoms/DefaultTitle';
import PillButton from '../atoms/PillButton';
import DefaultModal from '../molecules/DefaultModal';

const BoxButton = styled.View`
  margin-left: 40%;
  margin-top: 10%;
`;

const AddressModal = ({ show, onRequestClose }) => (
  <DefaultModal show={show} onRequestClose={onRequestClose}>
    <DefaultTitle>Endereço</DefaultTitle>
    <InputText title="CEP" keyboardType="numeric" returnKeyType="go" />
    <InputText title="ENDEREÇO (RUA/ AV.)" />
    <InputText title="NÚMERO" keyboardType="numeric" />
    <InputText title="COMPLEMENTO" />
    <InputText title="BAIRRO" />
    <InputText title="ESTADO/UF" />
    <InputText title="CIDADE" />
    <BoxButton>
      <PillButton title="SALVAR" />
    </BoxButton>
  </DefaultModal>
);
AddressModal.propTypes = {
  show: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
};
AddressModal.defaultProps = {
  show: false,
};

export default AddressModal;
