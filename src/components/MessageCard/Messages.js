import React from 'react';
import {SafeAreaView} from 'react-native';
import {FloatingButton} from '../FloatingButton';
import {styles} from './Messages.style';

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton icon="plus" />
    </SafeAreaView>
  );
};

export {Messages};
