import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {SearchIcon} from '../assets/svgs/HomeSvgs';
import {Colors} from '../assets/constants/Colors';

const Searcbar = ({setIsTyping, text, setText, onPressLeft, placeholder}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <TextInput
            onSubmitEditing={() => setIsTyping(true)}
            autoFocus={false}
            placeholder={placeholder}
            placeholderTextColor={'rgba(50, 50, 50, 0.5)'}
            value={text}
            onChangeText={setText}
            returnKeyType={'search'}
            style={{
              flex: 1,
              color: 'black',
            }}
          />
        </View>
        <TouchableOpacity onPress={onPressLeft} style={{width: 24, height: 24}}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Searcbar;

const styles = StyleSheet.create({
  container: {width: '100%'},

  btn: {
    paddingHorizontal: 15,
    height: 50,
    // width: 50,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: 'row',
    // marginLeft: 20,
    marginVertical: 10,
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
});
