import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './component/Navigation'

export default function App() {
  console.disableYellowBox = true;
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
