import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './Messages.style';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessagesCard = ({messages, lincle}) => {
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
      <View style={styles.footerContainer}>
        <Text style={styles.title}>{messages.text}</Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.lincContainer} onPress={lincle}>
            {!!messages.linc && (
              <View style={styles.lincCountContainer}>
                <Text style={styles.countText}>{messages.linc}</Text>
              </View>
            )}
            <Text style={styles.lincText}>Linç Et ¿?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export {MessagesCard};
