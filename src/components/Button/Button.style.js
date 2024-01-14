import {StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
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
      backgroundColor: '#6F1E51',
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: '#6F1E51',
    },
    title: {
      ...base_style.title,
      color: '#6F1E51',
    },
  }),
};
