import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './Input.style';

const Input = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export {Input};
