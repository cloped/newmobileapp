import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Text,
  Button,
} from 'react-native-ui-kitten';
import { CardIOModule } from 'react-native-awesome-card-io';

import {
  Input,
} from './commons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState(undefined);
  const [cardSecurityCode, setCardSecurityCode] = useState(undefined);

  const scanCard = () => {
    CardIOModule
      .scanCard()
      .then((card) => {
        setCardNumber(card.cardNumber);
        setCardSecurityCode(card.cvv);
      })
      .catch(() => {
      });
  };

  return (
    <Layout style={styles.container}>
      <Text category='h4'>Welcome to CreditCardForm</Text>
      <Input
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder='Número do cartão'
      />
      <Input
        value={cardSecurityCode}
        onChangeText={setCardSecurityCode}
        placeholder='Código de segurança'
      />
      <Button onPress={scanCard}>
        Escanear cartão
      </Button>
    </Layout>
  );
}

export default CreditCardForm;
