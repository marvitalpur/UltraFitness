import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

const MyCalendar = () => {
  return (
    <View>
      <Calendar
        style={{
          borderRadius: 12,
          paddingVertical: 10,
          //   borderColor: 'gray',
          // height: 262,
        }}
        onDayPress={day => console.log('selected day', day)}
        markedDates={{
          '2022-03-25': {selected: true, marked: true},
          '2022-03-26': {marked: true},
          '2022-03-27': {disabled: true},
        }}
      />
    </View>
  );
};

export default MyCalendar;

const styles = StyleSheet.create({});
