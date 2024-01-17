import {StyleSheet, Dimensions} from 'react-native';
import {styles as commonStyles} from '../../../styles/commonStyle';

const deviceSize = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    backgroundColor: commonStyles.colors.white,
    padding: commonStyles.generic.padding * 2,
    marginHorizontal: commonStyles.generic.margin,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: deviceSize.height / 3,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  inputContainer: {
    flex: 1,
  },
});
