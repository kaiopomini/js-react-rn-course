import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class Main extends React.Component {
  static navigationOptions = {
    title: 'JSHunt',
   
    headerTitleStyle: {
      alignSelf: 'center',
    },
  };

  render() {

    return (
      <View>
        <Text>Página Main</Text>
      </View>
    )
  }
}