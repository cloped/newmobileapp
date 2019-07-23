/* eslint-disable react/prop-types */
import React from 'react';
import {
  Input as Inpt,
} from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    // height: 30,
  },
  inputLabel: {
    fontWeight: 'bold',
    color: 'black',
  },
});

const Input = (props) => {
  const {
    value,
    onChangeText,
    placeholder,
    label,
    caption,
    // size,
    style,
  } = props;

  return (
    <Inpt
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      label={label}
      caption={caption}
      placeholder={placeholder}
      labelStyle={styles.inputLabel}
      size='small'
    />
  );
};

export default Input;
