import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './Login'
import Main from './Main'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignContent:"center",
    justifyContent:"center",
    backgroundColor: '#fff',
  },
});
