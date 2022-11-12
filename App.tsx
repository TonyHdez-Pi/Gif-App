import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './styles';
const App = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchAndFilters}>
        <View style={styles.searchBar}>
          <Text>Search bar</Text>
        </View>
        <View style={styles.Filters}>
          <Text>Filters</Text>
        </View>
      </View>
      <View style={styles.Images}>
        <Text>Images</Text>
      </View>
    </View>
  );
};

export default App;
