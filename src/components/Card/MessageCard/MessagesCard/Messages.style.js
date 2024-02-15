import {StyleSheet} from 'react-native';
import {styles as commonStyle} from '../../../../styles/commonStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.colors.mor,
    height: 120,
    padding: commonStyle.generic.padding,
    margin: commonStyle.generic.margin,
    borderRadius: commonStyle.generic.borderRadius,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  user: {
    color: commonStyle.colors.white,
    fontSize: 20,
    fontStyle: 'italic',
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
    fontWeight: 'bold',
  },
  footerContainer: {
    marginTop: 5,
  },
  footer: {
    backgroundColor: commonStyle.colors.white,
    borderRadius: commonStyle.generic.borderRadius * 2,
    padding: 2,
    alignSelf: 'flex-end',
    marginTop: 15,
  },
  lincContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lincCountContainer: {
    backgroundColor: commonStyle.colors.mor,
    borderRadius: 100,
    padding: 5,
    margin: 2,
    marginRight: 5,
  },
  countText: {
    color: commonStyle.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  lincText: {
    color: commonStyle.colors.mor,
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
  },
});
