import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {FloatingButton} from '../../FloatingButton';
import {ContentInputModal} from '../../Modal/ContentInputModal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../../utils/parseContentData';
import {MessagesCard} from '../MessageCard/MessagesCard';

import {styles} from './Messages.style';
import {useEffect, useState} from 'react';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const messageData = snapshot.val();
        const parsedData = parseContentData(messageData || {});
        setMessages(parsedData);
      });
  }, []);

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
      //content object's initial values
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
      linc: 0,
    };
    database().ref('messages/').push(contentObj);
    console.log(contentObj);
  }
  const handleLincle = item => {
    database()
      .ref(`messages/${item.id}/`)
      .update({linc: item.linc + 1});
  };

  const renderMessages = ({item}) => (
    <MessagesCard messages={item} lincle={() => handleLincle(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={messages} renderItem={renderMessages} />

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
