import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Messages.style';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessagesCard = ({messages}) => {
  const timeZone = formatDistance(parseISO(messages.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.user}>{messages.username}</Text>
        <Text style={styles.date}>{timeZone}</Text>
      </View>
      <Text style={styles.title}>{messages.text}</Text>
    </View>
  );
};

export {MessagesCard};
