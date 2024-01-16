import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Formik} from 'formik';
import {styles} from './Login.style';
import {Input} from '../../../components/Input';
import {Button} from '../../../components/Button';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  function handleSignUp() {
    navigation.navigate('SignPage');
  }
  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.span}>Linç</Text> Et ¿?
      </Text>
      <View sytyle={styles.input_container}>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                value={values.usermail}
                onType={handleChange('usermail')}
                placeholder="Kullanıcı adını giriniz..."
              />
              <Input
                value={values.password}
                onType={handleChange('password')}
                placeholder="Şifrenizi giriniz..."
                isSecure={true}
              />
              <Button
                text="Giriş Yap"
                loading={loading}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
        <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
      </View>
    </SafeAreaView>
  );
};

export {Login};
