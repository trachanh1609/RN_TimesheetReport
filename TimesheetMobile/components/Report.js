import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  // Button
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import axios from 'axios';
import {SERVER_URL} from '../const_var';
import { BarChart, Grid, XAxis, YAxis, StackedBarChart } from 'react-native-svg-charts';
import {connect} from 'react-redux';
import {fetchRecordFromAPI} from '../actions/actions';

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
      data: [7,9,8,8.5,6,0,0]
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
    const date_data = [
            {
                value: 12,
                label: '12',
            },
            {
                value: 13,
                label: '13',
            },
            {
                value: 14,
                label: '14',
            },
            {
                value: 15,
                label: '15',
            },
            {
                value: 16,
                label: '16',
            },
            {
                value: 17,
                label: 'Sat',
            },
            {
                value: 18,
                label: 'Sun',
            },
        ]

        const stacked_data = [
              {
                  Nokia: 4,
                  abb: 3,
              },
              {
                  Nokia: 2.5,
                  abb: 4,
              },
              {
                  Nokia: 2,
                  abb: 5.5,
              },
              {
                  Nokia: 0,
                  abb: 6,
              },
              {
                  Nokia: 5,
                  abb: 4,
              },
              {
                  Nokia: 0,
                  abb: 0,
              },
              {
                  Nokia: 0,
                  abb: 0,
              },
          ]

          const stacked_colors = [ 'orange', 'blue' ]
          const stacked_keys   = [ 'Nokia', 'abb' ]


    return (
      <View style={styles.container}>
        <View style={{flex:1, justifyContent: 'center'}}>
          <Text>UserName</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <View style={{flex: 1,padding: 5, paddingLeft: 20,backgroundColor: 'transparent'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Button
                buttonStyle={{
                  backgroundColor: "orange",
                  width: 40,
                  height: 10,
                }}

              />
              <Text>Nokia</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Button
                buttonStyle={{
                  backgroundColor: "blue",
                  width: 40,
                  height: 10,
                }}

              />
            <Text>ABB</Text>
            </View>
          </View>
          <View style={{flex:1,padding: 5, paddingLeft: 20,backgroundColor: 'transparent'}}>
            <Text>This week balance: +1h</Text>
            <Text>All time balance: +3h </Text>
          </View>
        </View>
        <View style={{flex: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom: 20}}>
            <Button
              icon={{
                name: 'arrow-back',
                size: 30,
                color: 'black'
              }}
              buttonStyle={{
                backgroundColor: 'transparent',
                }}
            />
          <Text>Week 20 12.5-18.5</Text>
              <Button
                icon={{
                  name: 'arrow-forward',
                  size: 30,
                  color: 'black'
                }}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  }}
              />
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style={{height: 200, marginRight: 10}}>
              <YAxis
                style={{height: 190, marginBottom: 30}}
                data={[1,2,3,4,5,6,7,8,9]}
                contentInset={{ top: 5, bottom: 15 }}
              />
            </View>
            <View style={{flexDirection: 'column'}}>
                {/*
                <BarChart
                      style={{ width: 300, height: 200 }}
                      data={ this.state.data }
                      gridMin={0}
                      svg={{ fill: 'rgb(134, 65, 244)' }}
                      contentInset={{ top: 5, bottom: 5 }}
                  >
                  <Grid direction={Grid.Direction.HORIZONTAL}/>
                </BarChart>
                */}
                <StackedBarChart
                      style={ { width: 300,height: 200 } }
                      keys={ stacked_keys }
                      colors={ stacked_colors }
                      data={ stacked_data }
                      showGrid={ true }
                      contentInset={ { top: 5, bottom: 5 } }
                  >
                  <Grid direction={Grid.Direction.HORIZONTAL}/>
                </StackedBarChart>
                <XAxis
                        style={{ width: 300, marginTop: 5, marginLeft: 15, marginRight: 15 }}
                        data={ date_data }
                        formatLabel={ (_, index) => date_data[index].label }
                        labelStyle={ { color: 'black' } }
                        contentInset={{ left: 5, right: 30 }}
                />
            </View>
          </View>
          {
            // this.state.users.map(user=><Text key={user.id}>{user.name}</Text>)
          }

          {
            this.props.isFetching && <Text>Loading ...</Text>
          }

          <Button
            raised
            icon={{name: 'add'}}
            backgroundColor="green"
            onPress={() => this.props.navigation.navigate('Newentry')}
            title="Add New Entry"
          />
        {/*
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
        */}
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
    fontSize: 16,
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
    records: state.records.records,
    isFetching: state.records.isFetching
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getRecordsFromAPI: () => dispatch(fetchRecordFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)
