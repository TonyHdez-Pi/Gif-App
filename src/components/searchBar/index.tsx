import {View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {stylesSB} from './styles';

const SearchBar = () => {
  return (
    <View style={stylesSB.searchBar}>
      <Icon name="search" size={20} color={'gray'} />
      <TextInput
        returnKeyType="search"
        placeholder="Gif"
        placeholderTextColor={'#808080'}
        style={stylesSB.inputStyle}
      />
    </View>
  );
};

export default SearchBar;
