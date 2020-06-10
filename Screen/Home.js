import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home =(props)=>{
  return (
    <View style={styles.container}>
      <Text>home</Text>
      <Button title ='exi' onpress ={()=>props.navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home