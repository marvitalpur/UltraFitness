import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Menu, TextInput, TouchableRipple} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';
import {Fonts} from '../assets/constants/Fonts';
import Icon from 'react-native-vector-icons/Feather';
import {WIDTH} from '../assets/constants/Dimensions';
const Input = ({
  text,
  setText,
  placeholder,
  formKey,
  gender,
  iconname,
  iconname1,
  textColor,
  backgroundColor,
  icon1,
  icon2,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const onChangeHandler = (value, name) => {
    // how to handle for each state field
    setText(form => ({
      ...form,
      [name]: value,
    }));
  };
  return (
    <>
      {gender ? (
        <GenderMenu
          value={text}
          onChangeHandler={onChangeHandler}
          formKey={formKey}
        />
      ) : (
        <TextInput
          placeholder={placeholder}
          value={text}
          onChangeText={text => onChangeHandler(text, formKey)}
          // left={
          //   icon1 ? (
          //     <TextInput.Icon icon={iconname1} iconColor="#00B4D8" />
          //   ) : null
          // }
          right={
            icon2 ? (
              <TextInput.Icon icon={iconname} iconColor="#00B4D8" />
            ) : null
          }
          activeUnderlineColor="transparent"
          underlineColor="transparent"
          selectionColor="#000"
          placeholderTextColor={textColor}
          theme={{roundness: 10}}
          style={{
            // fontFamily: Fonts.default,

            fontWeight: '400',
            height: 50,
            opacity: !text ? 0.5 : 1, // add null or undefined check here
            fontSize: 14,
            borderRadius: 10,
            backgroundColor: backgroundColor,
            shadowColor: Colors.tertiary,
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,
            elevation: 15,
          }}
        />
      )}
    </>
  );
};

export default Input;

const GenderMenu = ({
  value,
  onChangeHandler,
  formKey,
  color1,
  color2,
  Valueinput,
}) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      style={
        {
          // width: WIDTH / 2.5,
          // marginLeft: 20,
        }
      }
      contentStyle={{
        backgroundColor: Colors.secondary,
        borderRadius: 10,
      }}
      anchor={
        <TouchableRipple onPress={openMenu} style={styles.inputBtn}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Text
              style={[
                styles.btnText,
                {
                  opacity: value.length < 1 ? 0.5 : 1,
                  color: value.length < 1 ? color1 : color2,
                },
              ]}>
              {value ? value : Valueinput}
            </Text>
            <Icon
              name="chevron-down"
              size={20}
              color={value.length < 1 ? color1 : color2}
              style={{marginLeft: 5}}
            />
          </View>
        </TouchableRipple>
      }>
      <>
        <Menu.Item
          onPress={() => {
            closeMenu();
            onChangeHandler('', formKey);
          }}
          title=""
        />
        <Menu.Item
          onPress={() => {
            closeMenu();
            onChangeHandler('', formKey);
          }}
          title=""
        />
        <Menu.Item
          onPress={() => {
            closeMenu();
            onChangeHandler('Others', formKey);
          }}
          title=""
        />
      </>
    </Menu>
  );
};

const styles = StyleSheet.create({
  inputBtn: {
    // width: WIDTH,
    height: 50,
    borderRadius: 10,
    paddingLeft: 5,
    // marginLeft: 20,
    // marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    shadowColor: Colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  btnText: {
    fontSize: 14,
    fontFamily: Fonts.default,
    fontWeight: '200',
  },
});
