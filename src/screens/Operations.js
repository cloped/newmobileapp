import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  List,
  ListItem,
  Text,
} from 'react-native-ui-kitten';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listView: {
    width: '90%',
  },
});

const Operations = () => {
  const operations = [
    {
      establishment: 'Manaura Shopping',
      type: 'parking',
    },
  ];

  const renderItem = (params) => {
    const { item } = params;
    const { establishment } = item;

    return (
      <ListItem
      // title={${info.item}}
      // title='aa'
      // description='Description'
      // onPress={onItemPress}
      >
        <FontAwesomeIcon icon={faCar} size={40} />
        <Text>{establishment}</Text>
      </ListItem>
    );
  };

  return (
    <Layout style={styles.container}>
      <List
        style={styles.listView}
        data={operations}
        renderItem={renderItem}
      />
    </Layout>
  );
};

export default Operations;
