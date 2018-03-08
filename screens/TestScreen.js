import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { TestComponent } from './../components/AppComponents';

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{paddingTop:20}}>
        <Text>Hello</Text>
        <TestComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
