import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Viewer(){
  return(
    <View style={styles.container}>
      <Text style={styles.fuente}>¡El no te ama!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height: 50,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center'
  },
  fuente:{
    fontSize: 28,
    color: 'white',
  }
})

export default Viewer;