import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';

import {styles} from './styles';

interface filterProps {
  filterName: string;
}

const filters = [
  {id: 0, filter: 'Hotest'},
  {id: 1, filter: 'Newest'},
  {id: 2, filter: 'Funny'},
  {id: 3, filter: 'Sad'},
  {id: 4, filter: 'Cats'},
  {id: 5, filter: 'Dogs'},
];
const renderitem = ({filterName}: filterProps) => (
  <TouchableOpacity style={styles.filterContainer}>
    <Text>{filterName}</Text>
  </TouchableOpacity>
);

const Filters = ({filterNameArray}: {filterName: filterProps}) => {
  return (
    <View style={styles.mainContainer}>
      <FlatList renderItem={renderitem} data={filters} scrollEnabled={true} />
    </View>
  );
};

export default Filters;
