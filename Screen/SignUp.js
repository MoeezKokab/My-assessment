import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';
import { Input , Button } from 'react-native-elements';


const SignUp = (props) => {

  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')


  const Add =()=>{
     props.route.params.AddData(ID,password)
     
   
  }









  return (
    <View style={styles.container}>


      <Input
        label='ID'
        value={ID}
        onChangeText={text => setID(text)}
      />
      <Input
        label='password'
        value={password}

        onChangeText={text => setPassword(text)}
      />
    
  <Button type="clear" title='Sign up' onPress={() => Add()} />




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff4f7',
    
  },
});

export default SignUp