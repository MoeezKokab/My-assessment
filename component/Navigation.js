import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screen/Home'

import Login from '../Screen/Login'
import SignUp from '../Screen/SignUp'


export default ()=>
{const Stack = createStackNavigator()
return(<NavigationContainer>
  
  <Stack.Navigator headerMode='screen'>
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Signup" component={SignUp} />
</Stack.Navigator>
</NavigationContainer>)}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});