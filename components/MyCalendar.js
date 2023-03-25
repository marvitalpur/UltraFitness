import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { HEIGHT } from '../assets/constants/Dimensions';

const MyCalendar = () => {
  return (
    <View style={{

      // height: HEIGHT / 2.3,


      // justifyContent: 'center', alignItems: 'center',
    }}>
      <Calendar
        style={{
          borderRadius: 12,

          // height: HEIGHT / 2.6,
          justifyContent: 'center',
          alignContent: 'center',
          // margin: 30,
          // flexDirection: 'row',
          borderColor: 'gray',
          // height: 262,
          // backgroundColor: 'red'

        }}
        onDayPress={day => console.log('selected day', day)}
        markedDates={{
          '2022-03-25': { selected: true, marked: true },
          '2022-03-26': { marked: false },
          '2022-03-27': { disabled: true },
        }}
      />
    </View>
  );
};

export default MyCalendar;

const styles = StyleSheet.create({});
