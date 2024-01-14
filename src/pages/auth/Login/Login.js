import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './Login.style';
import {Input} from '../../../components/Input';
import {Button} from '../../../components/Button';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder="Kullanıcı adını giriniz..." />
      <Input placeholder="Şifrenizi giriniz..." />
      <Button text="Giriş Yap" />
      <Button text="Kayıt Ol" theme="secondary" />
    </SafeAreaView>
  );
};

export {Login};
