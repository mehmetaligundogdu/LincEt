import {StyleSheet} from 'react-native';
import {styles as commonStyle} from '../../../styles/commonStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: commonStyle.generic.padding,
    color: commonStyle.colors.mor,
  },
  span: {
    textDecorationLine: 'line-through',
    textDecorationColor: commonStyle.colors.white,
  },
});
