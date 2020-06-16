// screen divided into three part
// 1): Date time
// 2) : weather
// 3) : chat


import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button, ThemeProvider, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Weather from './Weather'
import Color from '../Constant/Color';
import AnalogClock from 'react-native-clock-analog';
import { FAB } from 'react-native-paper';


const Home = (props) => {
  var min = new Date().getMinutes()
  var hour = new Date().getHours()
  var sec = new Date().getSeconds()
  var date = new Date().getDate()
  var month = new Date().getMonth()
  var year = new Date().getFullYear()

  const [contantName, setContantName] = useState("Contact 1")
  const [msg, setMsg] = useState("This the contant's message Mein inko nahi chroonga Mein inko ruloonga")

  useEffect(
    () => {
      hour = new Date().getHours()
      min = new Date().getMinutes()
      sec = new Date().getSeconds()
      date = new Date().getDate()

    }
  )


  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <View style={{ flex: 1 }}>


          <View style={{ marginLeft: 91, marginTop: 12 }} >


            <AnalogClock
              colorClock="#2196F3"
              colorNumber="#000000"
              colorCenter="#00BCD4"
              colorHour="#FF8F00"
              colorMinutes="#FFC400"
              hour={hour}
              minutes={min}

            />

          </View>
          {/* to view calendar */}
          <Button title="calendar"

            type='clear'
            onPress={() => props.navigation.navigate('Calendar')}
            icon={
              <Icon
                style={{ marginRight: 6 }}
                name="calendar"
                size={15}
                color={Color.primary}
              />}
          />
          {/* to view time and date */}
          <Text>Time:{hour}:{min} {`\t\t\t\t\t\t`}Date{date}/{month}/{year}</Text>

        </View>
        <View style={{ flex: 1 }}>
          {/* to view current weather of lahore */}
          <Weather />

        </View>

        <View style={{ flex: 1 }}>
          <Text h1>{contantName}</Text>
          <Text h4>{msg}</Text>

          <Button title='Inbox'
            type='clear'
            icon={
              <Icon
                style={{ marginRight: 6 }}
                name="inbox"
                size={15}
                color={Color.primary}
              />}
            onPress={() => {
              // Alert.alert("coming")
              return props.navigation.navigate("Message")


            }
            } />


        </View>
      </ThemeProvider>

      {/* for logout */}
      <FAB
        theme={{ colors: { accent: Color.primary } }}
        style={styles.fab}
        small
        icon="exit-to-app"
        onPress={() => { return props.route.params.setLoginScreen(true) }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // screen divided into three part
  // 1): Date time
  // 2) : weather
  // 3) : chat
  container: {
    flex: 3,

  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

const theme = {
  Button: {
    titleStyle: {
      color: Color.primary,
    }

  },
};

export default Home