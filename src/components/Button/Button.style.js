import {StyleSheet} from 'react-native';
import {styles as commonStyle} from '../../styles/commonStyle';

const base_style = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: commonStyle.generic.padding,
    margin: commonStyle.generic.margin,
    borderRadius: commonStyle.generic.borderRadius,
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});

export const styles = {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: commonStyle.colors.mor,
    },
    title: {
      ...base_style.title,
      color: commonStyle.colors.white,
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: commonStyle.colors.white,
      borderWidth: 2,
      borderColor: commonStyle.colors.mor,
    },
    title: {
      ...base_style.title,
      color: commonStyle.colors.mor,
    },
  }),
};
