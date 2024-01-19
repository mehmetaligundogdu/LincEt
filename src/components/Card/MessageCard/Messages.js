import React from 'react';
import {SafeAreaView} from 'react-native';
import {FloatingButton} from '../../FloatingButton';
import {ContentInputModal} from '../../Modal/ContentInputModal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import {styles} from './Messages.style';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }
  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObj = {
      text: content,
      userName: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    console.log(contentObj);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export {Messages};
