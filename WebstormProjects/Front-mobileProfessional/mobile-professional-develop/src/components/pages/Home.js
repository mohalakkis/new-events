import React from 'react';
import { Text, View } from 'react-native';
import CardAddress from '../atoms/CardAddress';

const address = {
  base: 'Rua Santo Antônio do Descoberto, 000',
  city: 'Qd. 8 Lt. 25B, Cond. Res Mauá, Apto G-176',
  zipCode: 'st. Mauá, Rio de Janeiro / RJ, CEP 78.987-546',
};

const Home = () => (
  <View>
    <Text>Open up App.js to start working on your app!</Text>
    <CardAddress address={address} />
  </View>
);

export default Home;
