import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';

const ButtonComponent = ({
  icon,
  buttonColor,
  textColor,
  onPress,
  buttonText,
  height,
  width,
  disabled,
}) => {
  return (
    <Button
      disabled={disabled}
      icon={icon}
      mode="contained"
      buttonColor={buttonColor}
      textColor={textColor}
      contentStyle={{
        height: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: icon ? 'space-between' : 'center',
      }}
      style={{
        height: height,
        width: width,
        borderRadius: 50,
        justifyContent: 'center',
        shadowColor: Colors.tertiary,
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
      }}
      labelStyle={{fontSize: 22}}
      onPress={onPress}>
      <Text style={{fontSize: 16, fontFamily: 'Bahnschrift', fontWeight: 400}}>
        {buttonText}
      </Text>
    </Button>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
