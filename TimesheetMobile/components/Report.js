import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import axios from 'axios';
import {SERVER_URL} from '../const_var';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import {connect} from 'react-redux';
import {fetchRecordFromAPI} from '../actions/actions'

class Report extends Component {
  static navigationOptions = {
    title: 'Overview',
    headerTitleStyle: { alignSelf: 'center' },
  };

  constructor(props){
    super(props);
    this.state= {
      records: [],
      users: [{id: 1, name: 'One'}, {id:2, name: 'Two'}],
      data: [7,7.5,8,8.5,6,0,0]
    } ;
  }

  // async componentDidMount(){
  //   this.getUsers();
  //   await this.getRecords();
  //   let newData = this.getDataForChart(this.state.records) ;
  //   // this.setState(prev => ({...prev, data: newData}));
  // }

  getDataForChart(records) {
    return records.map(record => record.duration);
  }

  // async getUsers(){
  //   try {
  //     let response = await fetch( SERVER_URL + '/users');
  //     let responseJson = await response.json();
  //
  //     this.setState(prev => ({...prev, users: responseJson}));
  //   } catch (e){
  //     console.warn('Get failure');
  //     console.warn(e);
  //   }
  // }

  // async getRecords(){
  //   try {
  //     let response = await fetch( SERVER_URL + '/users/2/records');
  //     let responseJson = await response.json();
  //
  //     this.setState(prev => ({...prev, records: responseJson}));
  //   } catch (e){
  //     console.warn('Get failure');
  //     console.warn(e);
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, justifyContent: 'flex-end'}}>
          <Button

            onPress={() => this.props.navigation.navigate('Newentry')}
            title="Add new entry"
          />

        </View>
        <View style={{flex: 8}}>
          <Text style={styles.welcome}>
            This is the Report Page
          </Text>
          <View >
            <BarChart
                  style={{ width: 300, height: 200 }}
                  data={ this.state.data }
                  gridMin={0}
                  svg={{ fill: 'rgb(134, 65, 244)' }}
                  contentInset={{ top: 5, bottom: 5 }}
              >

              </BarChart>
              <XAxis
                      style={{ width: 300, marginTop: 5, marginLeft: 10 }}
                      data={ this.state.data }
                      formatLabel={ (value, index) => this.state.data[index] }
                      labelStyle={ { color: 'black' } }
              />
            </View>
          {
            // this.state.users.map(user=><Text key={user.id}>{user.name}</Text>)
          }

          <Button
            onPress={this.props.getRecordsFromAPI}
            title="Get Records from API"
            color="blue"
          />
          <Button
            onPress={()=>{console.warn(this.state.records)}}
            title="SHOW STATE"
            color="#841584"
          />
          <Button
            onPress={()=>{console.warn(this.props.records)}}
            title="SHOW PROPS"
            color="green"
          />
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

function mapStateToProps (state) {
  return {
    records: state.records
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getRecordsFromAPI: () => dispatch(fetchRecordFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)
