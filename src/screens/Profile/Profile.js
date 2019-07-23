/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  Layout,
  Text,
  Button,
  List,
  ListItem,
  Avatar,
} from 'react-native-ui-kitten';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCog, faCar } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import 'moment-timezone';
import 'moment/min/locales';

// import CreditCardForm from '../../components/CreditCardForm';

moment.locale('pt-br');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  configButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    marginHorizontal: 10,
  },
});

export const profileNavigationOptions = () => ({
  headerTitle: (
    <Layout style={styles.headerWrapper}>
      <Text>Henrique Wildes</Text>
      <FontAwesomeIcon style={styles.configButton} icon={faUserCog} size={30} />
    </Layout>
  ),
});

const operations = [
  {
    establishment: 'Manaura Shopping',
    type: 'parking',
    checkin: moment().tz('America/Manaus').calendar(),
  },
];

const renderItem = (params) => {
  const { item } = params;
  const { establishment, checkin } = item;

  return (
    <ListItem style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <FontAwesomeIcon
        icon={faCar}
        size={30}
      />
      <Text>
        Estabelecimento:
        {establishment}
      </Text>
      <Text>
        Checkin:
        {checkin}
      </Text>
    </ListItem>
  );
};

const Profile = props => (
  <ScrollView>
    <Layout>
      <Avatar source={require('../../../assets/empty-profile.png')} />
      <Text>Operações pendentes:</Text>
      <List
        data={operations}
        renderItem={renderItem}
      />
    </Layout>
    <Layout style={styles.container}>
      <Button
        onPress={() => {
          const { navigation } = props;
          navigation.navigate('Login');
        }}
      >
        Deslogar
      </Button>
    </Layout>
    {/* <Layout style={styles.cardWrapper}>
      <CreditCardForm />
    </Layout> */}
  </ScrollView>
);


export default Profile;
