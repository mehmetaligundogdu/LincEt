import {StyleSheet} from 'react-native';
import {styles as commonStyle} from '../../../styles/commonStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.colors.white,
  },
  input_container: {},
  title: {
    fontSize: 130,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: commonStyle.generic.margin,
    color: commonStyle.colors.mor,
  },
  span: {
    textDecorationColor: 'white',
    textDecorationLine: 'line-through',
  },
});
