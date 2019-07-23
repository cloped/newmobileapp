/* eslint-disable global-require */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Avatar } from 'react-native-ui-kitten';
import QRCode from 'react-native-qrcode-svg';

// const emptyProfile = require('../../assets/empty-profile');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 100,
  },
});

const Home = () => (
  <Layout style={styles.container}>
    <Layout>
      <Text style={styles.text} category='h4'>Henrique Wildes</Text>
    </Layout>
    <Avatar style={styles.avatar} source={require('../../../assets/empty-profile.png')} />
    <QRCode
      value='1234123123123123562'
      size={200}
    />
  </Layout>
);

export default Home;
