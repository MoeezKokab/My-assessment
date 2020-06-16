import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';



const App = () => {
  const [calendarOpened, setCalendarOpened] = useState(false);

  const onRefresh = () => {
    console.log('refreshing...')
    Alert.alert('refreshing...')
  }


  const onDayPress=()=>(day)=>{console.log('day pressed')
Alert.alert("select",data)
}



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1 }}>
        <Agenda
          items={{
            '2020-06-15': [{ text: 'meeting' }],
            '2020-06-16': [{ text: 'meeting' }],
            '2020-06-17': [{ text: 'meeting' }, { text: '2nd meeting' }],
          }}
          loadItemsForMonth={(month) => { console.log('trigger items loading') }}
          onDayPress={()=>onDayPress()}
          onDayChange={(day) => { console.log('day changed') }}
          selected={'2020-06-15'}
          minDate={'2000-01-01'}
          maxDate={'2030-12-31'}
          renderItem={(item, firstItemInDay) => (
            <View style={[styles.item, { height: item.height }]}>
              <Text>{item.text}</Text>
            </View>
          )}
          renderEmptyDate={() => (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
          )}
          onCalendarToggled={(calendarOpened) => setCalendarOpened(calendarOpened)}
          renderEmptyData={() => { return (<View><Text>empty data</Text></View>); }}
          rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
          onRefresh={() => onRefresh()}
          refreshing={false}
          refreshControl={null}
          calendarScrollable
          theme={{
            knobContainer: {
              backgroundColor: 'red'
            }
          }}
          style={{

          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default App;