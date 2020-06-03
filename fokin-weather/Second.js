import React, {Component} from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';

class Second extends Component {
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
      
    render() {
        const {navigation} = this.props;
        return (
            
            <View style={styles.container}>
                <View style={styles.header}><Text>First</Text></View>
                
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        //padding : 10,
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: '12%',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    title: {
        width: '100%',
        height: '18%',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
}) ;
export default Second;
