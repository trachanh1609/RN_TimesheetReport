import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';


export default class Entry extends Component {
  constructor(props){
    super(props);
    this.state = {report: []};
  }

  componentDidMount(){

  }

  render(){
    return (
      <View>
        <Text>Description</Text>
      </View>
    )
  }
}
