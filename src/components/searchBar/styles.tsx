import {StyleSheet} from 'react-native';

export const stylesSB = StyleSheet.create({
  searchBar: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    elevation: 7,
    padding: '2%',
    position: 'absolute',
    top: 0,
    shadowColor: '#808080',
  },
  inputStyle: {
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
});
