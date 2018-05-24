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
          current_page: 1,
          chart_date: [
              {   label: '2'},
              {   label: '3'},
              {   label: '4'},
              {   label: '5'},
              {   label: '6'},
              {   label: 'Sat' },
              {   label: 'Sun'},
          ],
          chart_data: [
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
            ],
          chart_colors: [ 'navy', 'indianred' ],
          chart_keys: [ 'Nokia', 'abb' ]
    } ;
  }

  componentDidMount(){
    this.props.getRecordsFromAPI();

  }

  loadPage = (page) => {
    if(page<0) return;
    let query = "_page=" + page + "&_limit=3";

    this.props.getRecordsFromAPI(query);
    this.setState({current_page: page});
  }

  getDataForChart(records) {
    return records.map(record => record.duration);
  }

  render() {
    return (
      <Grid>
          <Row size={5} style={{justifyContent: 'center', alignItems:'center'}}>
            <Text>UserName</Text>
          </Row>
          <Row size={15}>
            <Col>
              <Row style={{alignItems:'center'}}>
                <Button
                  buttonStyle={{
                    backgroundColor: "navy",
                    width: 60
                  }}
                />
                <Text>Nokia</Text>
              </Row>
              <Row style={{alignItems:'center'}}>
                <Button
                  buttonStyle={{
                    backgroundColor: "indianred",
                    width: 60
                  }}
                />
              <Text>ABB</Text>
              </Row>
            </Col>
            <Col>
              <Row style={{alignItems:'center', paddingLeft: 10}}>
                <Text>This week balance: +1h</Text>
              </Row>
              <Row style={{alignItems:'center', paddingLeft: 10}}>
                <Text>All time balance: +3h </Text>
              </Row>
            </Col>
          </Row>
          <Row size={10}>
            <Col size={25} style={{alignItems:'center', justifyContent: 'center'}}>
              <Button
                icon={{
                  name: 'arrow-back',
                  size: 30,
                  color: 'black'
                }}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  }}
                onPress={()=>this.loadPage(this.state.current_page-1)}
              />
            </Col>
            <Col size={50} style={{alignItems:'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 18}}>Week 20  12.5-18.5</Text>
            </Col>
            <Col size={25} style={{alignItems:'center', justifyContent: 'center'}}>
              <Button
                icon={{
                  name: 'arrow-forward',
                  size: 30,
                  color: 'black'
                }}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  }}
                onPress={()=>this.loadPage(this.state.current_page+1)}
              />
            </Col>

          </Row>
          <Row size={50} style={{padding: 20}}>
            {
              this.props.isFetching ? <Text>Loading ...</Text> :
              <ReportChart
                hours={this.state.chart_data}
                date={this.state.chart_date}
                colors={this.state.chart_colors}
                keys={this.state.chart_keys}
              />
            }
          </Row>
          <Row size={20} style={{justifyContent:'center', alignItems:'center'}}>
            <Button
              raised
              icon={{name: 'add'}}
              backgroundColor="green"
              onPress={() => this.props.navigation.navigate('Newentry')}
              title="Add New Entry"
            />
            <Button
              raised
              icon={{name: 'add'}}
              backgroundColor="blue"
              onPress={() => console.warn(this.props.records)}
              title="Show props.records"
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
    getRecordsFromAPI: (query) => dispatch(fetchRecordFromAPI(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
