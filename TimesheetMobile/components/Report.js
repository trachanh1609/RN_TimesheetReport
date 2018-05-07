import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';


export default class Report extends Component {
  constructor(props){
    super(props);
    this.state= {users: [{id: 1, name: 'One'}, {id:2, name: 'Two'}]} ;
  }

  componentDidMount(){
    this.getUsers();
  }

  async getUsers(){
    try {
      let response = await axios.get('http://192.168.1.4:3000/users');
      let responseJson = await response.json();
      console.warn('Get success');
      this.setState(prev => ({...prev, users: responseJson}));
    } catch (e){
      console.warn('Get failure');
      console.warn(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is the Report Page
        </Text>
        {this.state.users.map(user=><Text key={user.id}>{user.name}</Text>)}
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
