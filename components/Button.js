import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TouchableRipple} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {BookIcon} from '../assets/svgs/HeaderSvgs';
const ButtonComponent = ({
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
}) => {
  return (
    <TouchableRipple
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        {
          height: height,
          width: width,
          backgroundColor: buttonColor,
          borderRadius: borderRadius
        },
      ]}>
      <View
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: icon ? 'space-between' : 'center',
          paddingHorizontal: 15,
        }}>
        {icon1 && (
          <>
            <View style={{margin: 5}}>
              <BookIcon />
            </View>
          </>
        )}

        <Text
          style={{
            color: textColor,
            fontSize: 16,
            fontFamily: 'Bahnschrift',
            fontWeight: 400,
          }}>
          {buttonText}
        </Text>
        {SvgICon && (
          <View style={{paddingHorizontal: paddingHorizontal}}>{SvgICon}</View>
        )}

        {icon === 'logout' ? (
          <Icon2 name={icon} size={20} color={textColor} />
        ) : (
          <Icon name={icon} size={20} color={textColor} />
        )}
      </View>
    </TouchableRipple>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
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
