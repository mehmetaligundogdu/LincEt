import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator, View} from 'react-native';
import {styles} from './Button.style';

const Button = ({text, onPress, loading, theme = 'primary'}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {/*loading döndüğünde(true), butonun basılabilir durumunu ortadan kaldıralım ki, kullanıcı birden fazla istek atmasın */}
      {loading ? (
        <ActivityIndicator size="large" color="#A7D8F4" />
      ) : (
        <View style={styles[theme].button_container}>
          <Text style={styles[theme].title}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export {Button};
