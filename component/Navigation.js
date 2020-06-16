// Moving Between Screens with React Navigation



import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screen/Home'
import Login from '../Screen/Login'
import SignUp from '../Screen/SignUp'
import Color from '../Constant/Color'
import calendar from '../Screen/Calendar'
import Chat from '../Screen/Chat';
import ItemList from '../Screen/ItemList'
import Message from "../Screen/Message";



export default () => {
  const [loginScreen, setLoginScreen] = useState(true)

  // login/logout
  const SetLoginScreen = (input) => {
    setLoginScreen(input)
  }

  const loginStack = createStackNavigator() // stack of login screens
  const afterLoginStack = createStackNavigator() // stack of others screeen

  // if user is not login
  if (loginScreen) {
    return (
      <NavigationContainer>

        <loginStack.Navigator headerMode='screen' screenOptions={myOption}>
          <loginStack.Screen name="Login" component={Login} initialParams={{ setLoginScreen: SetLoginScreen }} />
          <loginStack.Screen name="Signup" component={SignUp} />

        </loginStack.Navigator>

      </NavigationContainer>
    )
  }
  // after successful logn
  else if (!loginScreen) {
    return (
      <NavigationContainer>

        <afterLoginStack.Navigator headerMode='screen' screenOptions={myOption}>

          <afterLoginStack.Screen name="Home" component={Home} initialParams={{ setLoginScreen: SetLoginScreen }} />
          <afterLoginStack.Screen name="Calendar" component={calendar} />
          <afterLoginStack.Screen name="Message" component={Message} />
          <afterLoginStack.Screen name="ItemList" component={ItemList} />
          <afterLoginStack.Screen name="Chat" component={Chat} />

        </afterLoginStack.Navigator>

      </NavigationContainer>
    )


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
// StackNavigator
const myOption = {
  headerStyle: {
    backgroundColor: Color.primary,

  },
  headerTintColor: Color.title, // title color
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20
  }

}