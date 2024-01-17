import {StyleSheet} from 'react-native';
import {styles as commonStyle} from '../../styles/commonStyle';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: commonStyle.colors.mor,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
