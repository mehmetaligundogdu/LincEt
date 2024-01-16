import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessages from '../../../utils/authErrorMessages';
import {Formik} from 'formik';
import {styles} from './Sign.style';
import {Input} from '../../../components/Input';
import {Button} from '../../../components/Button';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  function goBack() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler aynı değil',
        type: 'danger',
      });
      return;
    }

    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.repassword,
      );
      showMessage({
        message: 'Kayıt başarılı',
        type: 'success',
      }),
        navigation.navigate('LoginPage');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessages(error.code),
        type: 'danger',
      });
      setLoading(false);
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
                isSecure
              />
              <Input
                value={values.repassword}
                onType={handleChange('repassword')}
                placeholder="Şifrenizi tekrar giriniz..."
                isSecure
              />
              <Button
                text="Kayıt Ol"
                loading={loading}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
        <Button text="Giriş Yap" theme="secondary" onPress={goBack} />
      </View>
    </SafeAreaView>
  );
};

export {Sign};
