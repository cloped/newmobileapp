/* eslint-disable react/prop-types */
import React, { useState, Fragment } from 'react';
import { StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import {
  Layout,
  Text,
  Button,
} from 'react-native-ui-kitten';
import {
  Input,
} from '../../components/commons';

const styles = StyleSheet.create({
  infoWrapper: {
    position: 'relative',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '90%',
  },
  buttonLogin: {
    marginTop: 10,
    width: '100%',
  },
  registryText: {
    marginTop: 10,
    alignSelf: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 120,
  },
  footer: {
    borderStyle: 'solid',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    backgroundColor: '#eff1f2',
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { navigation } = props;

  const handleLogin = () => {
    if (isLoading === false) {
      Keyboard.dismiss();
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate('Home');
      }, 2000);
    }
  };

  return (
    <Fragment>
      <Layout style={styles.infoWrapper}>
        <Input
          value={username}
          onChangeText={setUsername}
          placeholder='Digite seu usuário'
          size='small'
          label='Usuário'
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder='Digite sua senha'
          size='small'
          label='Senha'
          secureTextEntry
        />
        <Button
          style={styles.buttonLogin}
          disabled={!(username !== '' && password !== '') || isLoading}
          onPress={handleLogin}
        >
          Entrar
        </Button>

        <Text style={styles.registryText} category='c1'>
          Ainda não possui uma conta?
          <Text style={styles.boldText} category='c1'> Cadastre-se</Text>
        </Text>

        {isLoading ? <ActivityIndicator style={styles.loader} size={50} color='#3365FE' /> : null}
      </Layout>

      <Layout style={styles.footer}>
        <Text category='c1'>
          Esqueceu seus dados de login?
          <Text style={styles.boldText} category='c1'> Recupere sua senha</Text>
        </Text>
      </Layout>
    </Fragment>
  );
};

export default Login;
