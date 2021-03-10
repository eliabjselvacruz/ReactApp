/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Viewer from './src/components/viewer/viewer';

class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.green}>
          <Viewer></Viewer>
        </View>
        <View style={{flex: 1, backgroundColor: 'orange'}}></View>
        <View style={{flex: 1, backgroundColor: 'red'}}></View>
        <View style={{flex: 1, backgroundColor: 'pink'}}></View>
        <View style={{flex: 1}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'purple',
    flexDirection: 'column'
  },
  green:{
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center'
  }
});

export default App;
