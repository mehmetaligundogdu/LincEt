import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './Input.style';

const Input = ({placeholder, value, onType, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#a0a0a0'}
        value={value}
        onChangeText={onType}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export {Input};
