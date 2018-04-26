import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Report extends Component {
  constructor(props){
    super(props);
    this.state= {users: [{name: 'One'}, {name: 'Two'}]} ;
  }

  componentDidMount(){
    this.getUsers();
  }

  async getUsers(){
    try {
      let response = await fetch('http://192.168.1.4:3000/users');
      let responseJson = await response.json();
      this.setState(prev => ({...prev, users: responseJson}));
    } catch (e){
      console.warn(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is the Report Page
        </Text>
        {this.state.users.map(user=><Text>{user.name}</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
