import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {
  BackSvg,
  LogoSvg,
  MenuSvg,
  NotificationSvg,
} from '../assets/svgs/HeaderSvgs';
import {Colors} from '../assets/constants/Colors';
import {Fonts} from '../assets/constants/Fonts';
import Assets from '../assets';

const Header = ({
  logo,
  navigation,
  backIcon,
  headertex,
  backIcon1,
  onlybackbutton,
  Addbtn,
  AddBtn,
}) => {
  return (
    <View style={styles.container}>
      <TouchableRipple
        onPress={() =>
          backIcon1
            ? navigation.goBack()
            : onlybackbutton
            ? navigation.goBack()
            : backIcon
            ? navigation.closeDrawer()
            : navigation.openDrawer()
        }
        style={styles.btn}>
        {backIcon1 ? <BackSvg /> : backIcon ? <BackSvg /> : <MenuSvg />}
      </TouchableRipple>
      {headertex && <Text style={styles.headertex}>{headertex}</Text>}
      {logo && <LogoSvg />}

      {backIcon ? (
        <View style={{}}></View>
      ) : (
        <TouchableRipple style={styles.btn}>
          <NotificationSvg />
        </TouchableRipple>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    // backgroundColor: 'red',
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    // marginLeft: 20,
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  headertex: {
    fontSize: 22,
    color: Colors.tertiary,
    fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 22,
    color: Colors.tertiary,
    // letterSpacing: 0.9,
  },
});
