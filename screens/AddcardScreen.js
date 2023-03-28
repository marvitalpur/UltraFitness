import { ScrollView, StyleSheet, Text, View, Image, Modal } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/constants/Colors';
import { Fonts } from '../assets/constants/Fonts';
import { Checkbox, FAB, TouchableRipple } from 'react-native-paper';
import Assets from '../assets';
import { WIDTH } from '../assets/constants/Dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';


const AddcardScreen = ({ navigation }) => {
  const [checked, setChecked] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <View style={{ paddingHorizontal: 15, marginTop: 25, }}>
            <HeaderComponent navigation={navigation} />
          </View>
          <View
            style={{
              paddingTop: 15,
              height: '40%',
              marginTop: 25,
              flexDirection: 'row',
              paddingHorizontal: 15,
            }}>
            <Checkbox
              uncheckedColor={Colors.primary}
              size={12}
              color={Colors.primary}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Image
              source={Assets.ProfileImages.card3}
              resizeMode="contain"
              style={{
                height:
                  WIDTH < 390 && WIDTH >= 375 ? 240 : WIDTH < 375 ? 240 : 240,
                position: 'absolute',
                top:
                  WIDTH < 390 && WIDTH >= 375 ? -24 : WIDTH < 375 ? -24 : -16,
                left:
                  WIDTH < 390 && WIDTH >= 375
                    ? -170
                    : WIDTH < 375
                      ? -365
                      : -350,
                // right:
                //   WIDTH < 390 && WIDTH >= 375 ? -170 : WIDTH < 375 ? -320 : -390,
                zIndex: 10,
              }}
            />
          </View>
          <View
            style={{
              // marginTop: 25,
              flexDirection: 'row',
              paddingHorizontal: 15,
              paddingTop: 15
            }}>
            <Checkbox
              uncheckedColor={Colors.primary}
              size={12}
              color={Colors.primary}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Image
              source={Assets.ProfileImages.card3}
              resizeMode="contain"
              style={{
                height:
                  WIDTH < 390 && WIDTH >= 375 ? 195 : WIDTH < 375 ? 240 : 240,
                position: 'absolute',
                top:
                  WIDTH < 390 && WIDTH >= 375 ? -20 : WIDTH < 375 ? -20 : -16,
                left:
                  WIDTH < 390 && WIDTH >= 375
                    ? -170
                    : WIDTH < 375
                      ? -365
                      : -350,
                // right:
                //   WIDTH < 390 && WIDTH >= 375 ? -170 : WIDTH < 375 ? -320 : -390,
                zIndex: 10,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const HeaderComponent = ({ navigation, setModalVisible, modalVisible }) => {
  return (
    <View style={[styles.headerContainer, {}]}>
      <View style={{ flexDirection: 'row' }}>
        <FAB
          style={[
            styles.fab,
            {
              height: WIDTH < 375 ? 40 : 55,
              width: WIDTH < 375 ? 40 : 55,
            },
          ]}
          size="small"
          icon="arrow-left"
          color={Colors.tertiary}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text style={styles.headertex}>Cards</Text>
      <TouchableOpacity onPress={setModalVisible} style={{ flexDirection: 'row' }}>
        <Image source={require('../assets/images/card-add.png')} />
        <Text style={styles.addtext}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const Popup = () => {
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  text: {
    fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 18,
    color: Colors.tertiary,
    letterSpacing: 0.9,
  },
  boldtext: {
    textAlign: 'center',
    padding: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    // backgroundColor: 'red',
  },
  fab: {
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
    textAlign: 'center'
    // letterSpacing: 0.9,
  },
  addtext: {

    fontSize: 18,
    paddingLeft: 5,
    color: Colors.primary
  }

});

export default AddcardScreen;
