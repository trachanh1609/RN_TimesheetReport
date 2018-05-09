import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import axios from 'axios';
import {SERVER_URL} from '../const_var'


export default class Report extends Component {
  static navigationOptions = {
    title: 'Overview',
    headerTitleStyle: { alignSelf: 'center' },
  };

  constructor(props){
    super(props);
    this.state= {records: [],users: [{id: 1, name: 'One'}, {id:2, name: 'Two'}]} ;
  }

  componentDidMount(){
    this.getUsers();
    this.getRecords();
  }

  async getUsers(){
    try {
      let response = await fetch( SERVER_URL + '/users');
      let responseJson = await response.json();

      this.setState(prev => ({...prev, users: responseJson}));
    } catch (e){
      console.warn('Get failure');
      console.warn(e);
    }
  }

  async getRecords(){
    try {
      let response = await fetch( SERVER_URL + '/users/2/records');
      let responseJson = await response.json();

      this.setState(prev => ({...prev, records: responseJson}));
    } catch (e){
      console.warn('Get failure');
      console.warn(e);
    }
  }

  componentWillUnmount(){

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, justifyContent: 'flex-end'}}>
          <Button

            onPress={() => this.props.navigation.navigate('Newentry')}
            title="Add new entry"
          />
          <Button
            onPress={()=>{console.warn(this.state.records)}}
            title="SHOW STATE"
            color="#841584"
          />
        </View>
        <View style={{flex: 8}}>
          <Text style={styles.welcome}>
            This is the Report Page
          </Text>
          {this.state.users.map(user=><Text key={user.id}>{user.name}</Text>)}
        </View>

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
