import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import axios from 'axios';


export default class Entry extends Component {
  constructor(props){
    super(props);
    this.state = {newEntry:
      { userId: 2,
        projectName: 'ABB Drive',
        date: new Date(),
        duration: {
          hour: 7,
          minute: 30,
        },
        summary: 'Creating new functions today'
      }
    };
  }

  componentDidMount(){

  }

  createNewEntry = async ()=> {
    try {
        console.warn(this.state.newEntry.date);
        let data = JSON.stringify(this.state.newEntry);
        let response = await fetch('http://192.168.1.4:3000/reports', data);
        console.warn(response);
    } catch (e) {
      console.warn('createNewEntry failed');
      console.warn(e);
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>New Entry</Text>
        </View>
        <View style={styles.row}>
          <Text>Date</Text>
        </View>
        <View style={styles.row}>
          <Text>Project</Text>
        </View>
        <View style={styles.row}>
          <Text>7 : 30 min</Text>
        </View>
        <View style={styles.row}>
          <Text>Summary</Text>
        </View>
        <View style={styles.row}>
          <Button
            onPress={this.createNewEntry}
            title="ADD"
            color="#841584"
          />
          <Button
            onPress={this.createNewEntry}
            title="CANCEL"
            color="#841584"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 40,
    backgroundColor: '#F5FCFF',
  },
  row:{
    flexDirection: 'row',
  }
});
