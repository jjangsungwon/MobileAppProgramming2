import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';

class Third extends Component {
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    
      render() {
        const { search } = this.state;
        <View><Text>asd</Text></View>
        return (
          <SearchBar
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={search}
          />
        );
      }
}

export default Third;

