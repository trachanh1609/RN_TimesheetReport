import React, {Component} from 'react';
import { Grid, XAxis, YAxis, StackedBarChart } from 'react-native-svg-charts';
import {View} from 'react-native';


export default class ReportChart extends Component {

  render(){

    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{height: 230, marginRight: 10}}>
          <YAxis
            style={{height: 220}}
            data={[1,2,3,4,5,6,7,8,9,10]}
            contentInset={{ top: 6, bottom: 5 }}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
            <StackedBarChart
                  style={ { width: 300,height: 220 } }
                  keys={ this.props.keys }
                  colors={ this.props.colors }
                  data={ this.props.hours }
                  showGrid={ true }
                  contentInset={ { top: 5, bottom: 5 } }
              >
              <Grid direction={Grid.Direction.HORIZONTAL}/>
            </StackedBarChart>
            <XAxis
                    style={{ width: 300, marginTop: 5, marginLeft: 15, marginRight: 15 }}
                    data={ this.props.date }
                    formatLabel={ (_, index) => this.props.date[index].label }
                    labelStyle={ { color: 'black' } }
                    contentInset={{ left: 5, right: 30 }}
            />
        </View>
      </View>
    )
  }
}
