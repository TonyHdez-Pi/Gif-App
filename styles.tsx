import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  searchAndFilters: {
    width: '100%',
    paddingHorizontal: 20,
  },
  searchBar: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    height: 40,
    marginBottom: 10,
  },
  filters: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
  },
  filterItem: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 5,
  },
  textInsideFilterItem: {
    textAlign: 'center',
  },
  images: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
  },
});
