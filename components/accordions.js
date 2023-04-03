import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Menu, TouchableRipple} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';
import {Fonts} from '../assets/constants/Fonts';
import Icon from 'react-native-vector-icons/Feather';
const MyComponent = ({
  value,
  onChangeHandler,
  formKey,
  color1,
  color2,
  Valueinput,
}) => {
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [visible, setVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
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
                    // opacity: value.length < 1 ? 0.5 : 1,
                    // color: value.length < 1 ? color1 : color2,
                  },
                ]}>
                {value ? value : Valueinput}
              </Text>
              <Icon
                name="chevron-down"
                size={20}
                // color={value.length < 1 ? color1 : color2}
                style={{marginLeft: 5}}
              />
            </View>
          </TouchableRipple>
        }>
        <>
          <Menu.Item
            leadingIcon="redo"
            onPress={() => {
              closeMenu();
              onChangeHandler('Redo', formKey);
            }}
            title="Redo"
          />
          <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
        </>
      </Menu>
    </View>
  );
};

export default MyComponent;

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
