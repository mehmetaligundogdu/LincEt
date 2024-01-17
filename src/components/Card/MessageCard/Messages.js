import React from 'react';
import {SafeAreaView} from 'react-native';
import {FloatingButton} from '../../FloatingButton';
import {ContentInputModal} from '../../Modal/ContentInputModal';

import {styles} from './Messages.style';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content) {
    console.log(content);
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
