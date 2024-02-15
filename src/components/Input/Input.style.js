import {StyleSheet, Platform} from 'react-native';
import {styles as commonStyle} from '../../styles/commonStyle';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: commonStyle.colors.white,
    borderWidth: 0.2,
    borderColor: commonStyle.colors.mor,
    padding: Platform.OS === 'ios' ? commonStyle.generic.padding : 0,
    margin: commonStyle.generic.margin,
    borderRadius:
      Platform.OS === 'android'
        ? commonStyle.generic.borderRadius
        : commonStyle.generic.borderRadius * 2,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    color: commonStyle.colors.black,
    padding: Platform.OS === 'android' ? 5 : 0,
  },
});
