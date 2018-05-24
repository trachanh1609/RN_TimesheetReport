import React, {Component} from 'react';
import { Grid, XAxis, YAxis, StackedBarChart } from 'react-native-svg-charts';
import {View} from 'react-native';


export default class ReportChart extends Component {

  render(){

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
    )
  }
}
