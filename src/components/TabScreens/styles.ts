import { StyleSheet } from 'react-native';

const BG_COLOR = '#121317';

const inlineStyle = StyleSheet.create({
  disabledRedirectionBar: {
    backgroundColor: BG_COLOR,
    borderTopWidth: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabStyle: {
    backgroundColor: BG_COLOR,
  },
});

export default inlineStyle;
