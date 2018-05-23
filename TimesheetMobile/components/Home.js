import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import {SERVER_URL} from '../const_var';
import { XAxis, YAxis, StackedBarChart } from 'react-native-svg-charts';
import {connect} from 'react-redux';
import {fetchRecordFromAPI} from '../actions/actions';
import { Col, Row, Grid } from "react-native-easy-grid";
import ReportChart from './ReportChart';

class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Report')}
          title="Report"
          color="#fff"
        ></Button>
      ),
      headerTitleStyle: { alignSelf: 'center' },
    }
  };

  constructor(props){
    super(props);
    this.state= {
      records: [],
      data: []
    } ;
  }

  componentDidMount(){

  }

  getDataForChart(records) {
    return records.map(record => record.duration);
  }

  render() {
    return (
      <Grid>
          <Row size={5} style={{backgroundColor: 'red', justifyContent: 'center', alignItems:'center'}}>
            <Text>UserName</Text>
          </Row>
          <Row size={15} style={{backgroundColor: 'green'}}>
            <Col style={{backgroundColor: 'pink'}}>
              <Row style={{alignItems:'center'}}>
                <Button
                  buttonStyle={{
                    backgroundColor: "orange",
                    width: 60
                  }}
                />
                <Text>Nokia</Text>
              </Row>
              <Row style={{alignItems:'center'}}>
                <Button
                  buttonStyle={{
                    backgroundColor: "blue",
                    width: 60
                  }}
                />
              <Text>ABB</Text>
              </Row>
            </Col>
            <Col style={{backgroundColor: 'yellow'}}>
              <Row style={{alignItems:'center', paddingLeft: 10}}>
                <Text>This week balance: +1h</Text>
              </Row>
              <Row style={{alignItems:'center', paddingLeft: 10}}>
                <Text>All time balance: +3h </Text>
              </Row>
            </Col>
          </Row>
          <Row size={10} style={{backgroundColor: 'red'}}>
            <Col size={25} style={{backgroundColor: 'blue', alignItems:'center', justifyContent: 'center'}}>
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
            </Col>
            <Col size={50} style={{backgroundColor: 'green', alignItems:'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 18}}>Week 20  12.5-18.5</Text>
            </Col>
            <Col size={25} style={{backgroundColor: 'gray', alignItems:'center', justifyContent: 'center'}}>
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
            </Col>

          </Row>
          <Row size={50} style={{padding: 20}}>
            <ReportChart/>
          </Row>
          <Row size={20} style={{backgroundColor: 'yellow', justifyContent:'center', alignItems:'center'}}>
            <Button
              raised
              icon={{name: 'add'}}
              backgroundColor="green"
              onPress={() => this.props.navigation.navigate('Newentry')}
              title="Add New Entry"
            />
          </Row>

      </Grid>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
