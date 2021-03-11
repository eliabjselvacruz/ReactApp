import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

class Contador extends Component{

  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementar = this.incrementar.bind(this);
    this.reducir = this.reducir.bind(this);
  }

  incrementar(){
    const { counter: ct } = this.state;
    this.setState({counter: ct + 1});
  }

  reducir(){
    const { counter: ct } = this.state;
    this.setState({counter: ct - 1});
  }

  render(){

    const { counter } = this.state;

    return(
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.reducir}
            >
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.incrementar}
          >
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer:{
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
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
  counterContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter:{
    fontSize: 50,
    color: '#FFF',
    fontWeight: 'bold',
  }
})

export default Contador;