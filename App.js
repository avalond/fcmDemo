/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Clipboard,
  Platform,
  ScrollView
} from 'react-native';
import PushNotificationController from './src/PushNotificationController';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PushNotificationController/>
        <Text style={styles.welcome}>
          Welcome to Push Notification for React Native!
        </Text>
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
});
