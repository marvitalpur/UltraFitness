import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../assets/constants/Colors';
import {Fonts} from '../assets/constants/Fonts';
import Icon from 'react-native-vector-icons/Feather';

const InputCompo = ({
  text,
  setText,
  placeholder,
  formKey,
  gender,
  iconname2,
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
      <View
        style={[
          styles.inputBtn,
          {
            backgroundColor: backgroundColor,
            opacity: !text ? 0.5 : 1,
            paddingHorizontal: 10,
          },
        ]}>
        <View
          style={{
            // width: '90%',
            flexDirection: 'row',
            // backgroundColor: 'green',
          }}>
          <Icon
            name={iconname1}
            color="#00B4D8"
            size={18}
            style={{top: 15, paddingHorizontal: 5}}
          />
          {/* {icon1 ? <Icon icon={iconname1} iconColor="#00B4D8" /> : null} */}
          <TextInput
            placeholderTextColor={textColor}
            placeholder={placeholder}
            value={text}
            onChangeText={text => onChangeHandler(text, formKey)}
          />
        </View>
        {icon2 && (
          <View>
            <Icon
              name={iconname2}
              color="#00B4D8"
              size={18}
              style={{top: 15, paddingHorizontal: 5}}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default InputCompo;

const styles = StyleSheet.create({
  inputBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    // fontFamily: Fonts.default,
    // color: textColor,
    fontWeight: '400',
    height: 50,
    // add null or undefined check here
    fontSize: 14,
    borderRadius: 10,

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
