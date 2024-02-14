import {StyleSheet} from 'react-native';
import {styles as commonStyle} from '../../../../styles/commonStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.colors.mor,
    height: 100,
    padding: commonStyle.generic.padding,
    margin: commonStyle.generic.margin,
    borderRadius: commonStyle.generic.borderRadius,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  user: {
    color: commonStyle.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    flex: 1,
    textAlign: 'right',
    color: commonStyle.colors.white,
    fontStyle: 'italic',
    fontSize: 10,
  },
  title: {
    color: commonStyle.colors.white,
    fontSize: 16,
    fontStyle: 'italic',
  },
  footer: {
    backgroundColor: commonStyle.colors.white,
    borderRadius: commonStyle.generic.borderRadius,
  },
  lincContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lincCounContainer: {
    backgroundColor: commonStyle.colors.mor,
    borderRadius: commonStyle.generic.borderRadius,
  },
});
