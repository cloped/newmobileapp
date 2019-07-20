/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from 'react-native-ui-kitten';

import CreditCardForm from '../components/CreditCardForm';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 16,
  },
  aux: {
    flex: 1,
  }
});

const Profile = props => (
  <Fragment>
    <Layout style={styles.container}>
      <Text style={styles.text} category='h4'>Welcome to Profile</Text>
      <Button
        onPress={() => {
          const { navigation } = props;
          navigation.navigate('Login');
        }}
      >
        Deslogar
      </Button>
    </Layout>
    <Layout style={styles.container}>
      <CreditCardForm />
    </Layout>
  </Fragment>
);

export default Profile;
