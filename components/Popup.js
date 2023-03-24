import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import {Colors} from '../assets/constants/Colors';
import {Fonts} from '../assets/constants/Fonts';
import {CheckIcon} from '../assets/svgs/HomeSvgs';

const Mymodal = ({
  modalVisible,
  setModalVisible,
  innerButton,
  cartbtn,
  onPress,
  modaltext1,
  button1,
  button2,
}) => {
  return (
    <Overlay
      backdropStyle={styles.backdrop}
      animationType="fade"
      transparent={true}
      overlayStyle={styles.modalView}
      // style={{backgroundColor: 'rgba(0, 0, 255, 0.5)', opacity: 0.5}}
      // animationType="slide" // transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setModalVisible(modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={{}}>{<CheckIcon />}</View>
        <Text style={styles.modalText}>{modaltext1}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {button1 && (
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={onPress}>
            <Text style={[styles.textStyle, {color: '#000'}]}>{button1}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={cartbtn}>
          <Text style={[styles.textStyle]}>{button2}</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    // backgroundColor: 'green',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 180, 216, 0.5)',
  },
  modalView: {
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
    paddingVertical: 25,
  },
  button: {
    borderRadius: 15,
    height: 45,
    // padding: 15,
    elevation: 2,
    // paddingRight: 35,
    // paddingLeft: 35,
    justifyContent: 'center',
    margin: 1,
  },
  buttonClose: {
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonOpen: {backgroundColor: '#ffff', borderWidth: 1},
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 30,
    fontFamily: 'NoirPro-SemiBold',
  },
  modalText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: Fonts.default,
  },
});

export default Mymodal;
