import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class Button extends Component{
 render(){
   const {label, action} = this.props;
   return(
    <TouchableOpacity
    style={styles.btn}
    onPress={action}
    >
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
   );
 }
}

const styles = StyleSheet.create({
  btn:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    borderRadius: 2
  },
  btnText:{
    fontSize: 30,
    color: '#7f8c8d',
    fontWeight: 'bold'
  },
})

export default Button;

