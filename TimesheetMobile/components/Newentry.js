import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import axios from 'axios';
import {SERVER_URL} from '../const_var';
import DatePicker from 'react-native-datepicker';


export default class Entry extends Component {
  constructor(props){
    super(props);
    this.state = {newEntry:
      { userId: 2,
        projectName: 'default',
        date: new Date(),
        duration: 7.5,
        summary: 'Creating new functions today'
      }
    };
  }

  componentDidMount(){

  }

  createNewEntry = async () => {
    try {
        let data = Object.assign({},this.state.newEntry,{
          date: new Date()
        });

        let response = await fetch(SERVER_URL + '/reports', {
          method: 'post',
          body: JSON.stringify(data),
          headers: new Headers({
            'Content-Type': 'application/json'
          })

        });
        let responseJson = await response.json();
        console.warn(responseJson);
    } catch (e) {
      console.warn('createNewEntry failed');
      console.warn(e);
    }
  }

// this createEntry is working
  // createEntry() {
  //   let data = {
  //     userId: 3,
  //     projectName: 'Apple',
  //     date: new Date(),
  //     duration: {
  //       hour: 7,
  //       minute: 30,
  //     },
  //     summary: 'Today is a good day'
  //   };
  //
  //   fetch(SERVER_URL + '/reports', {
  //     method: 'post',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(res => res.json())
  //   .then(response => console.warn('Success:'))
  //   .catch(error => console.warn(error ));
  // }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>New Entry</Text>
        </View>
        <View style={styles.row}>
              <DatePicker
                style={{width: 200}}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2018-05-15"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />

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
