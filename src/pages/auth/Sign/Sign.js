import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import {styles} from './Sign.style';
import {Input} from '../../../components/Input';
import {Button} from '../../../components/Button';

const Sign = ({navigation}) => {
  function goBack() {
    navigation.goBack();
  }
  const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
  };

  function handleFormSubmit(formValues) {
    console.log(formValues);
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
              <Input
                value={values.repassword}
                onType={handleChange('repassword')}
                placeholder="Şifrenizi tekrar giriniz..."
                isSecure={true}
              />
              <Button text="Giriş Yap" onPress={handleSubmit} />
            </>
          )}
        </Formik>
        <Button text="Giriş Yap" theme="secondary" onPress={goBack} />
      </View>
    </SafeAreaView>
  );
};

export {Sign};
