import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TouchableRipple} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';
import Icon from 'react-native-vector-icons/Entypo';
const ButtonComponent2 = ({
  icon,
  buttonColor,
  textColor,
  onPress,
  buttonText,
  height,
  width,
  disabled,
  icon1,
  Icon1,
  SvgICon,
  paddingHorizontal,
  borderRadius,
  btnfonSize,
  Iname,
  color,
}) => {
  return (
    <TouchableRipple
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        {height: height, width: width, backgroundColor: buttonColor},
      ]}>
      <View
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 5,
        }}>
        {icon1 && (
          <>
            <View style={{margin: 5}}>
              <Icon name={Iname} color={color} size={18} />
            </View>
          </>
        )}
        <Icon
          name={icon}
          size={20}
          color={textColor}
          style={{paddingHorizontal: 2}}
        />
        <Text
          style={{
            color: textColor,
            fontSize: btnfonSize,
            fontFamily: 'Bahnschrift',
            fontWeight: 400,
          }}>
          {buttonText}
        </Text>
      </View>
    </TouchableRipple>
  );
};

export default ButtonComponent2;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: Colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    // elevation: 15,
  },
});

{
  /* <Button
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
    </Button> */
}
