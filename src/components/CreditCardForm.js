/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from 'react-native-ui-kitten';
import { CardIOModule } from 'react-native-awesome-card-io';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 16,
  },
});

const CreditCardForm = () => {
  const scanCard = () => {
    console.debug(CardIOModule);

    CardIOModule
      .scanCard()
      .then((card) => {
        // the scanned card
        console.debug('card:', card);
      })
      .catch(() => {
        // the user cancelled
      });
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category='h4'>Welcome to CreditCardForm</Text>
      <Button onPress={scanCard}>
        Escanear cartão
      </Button>
    </Layout>
  );
}

export default CreditCardForm;
