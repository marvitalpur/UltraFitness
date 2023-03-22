

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { WIDTH } from '../assets/constants/Dimensions';
import { Colors } from '../assets/constants/Colors';
import { Fonts } from '../assets/constants/Fonts';

import Icon from 'react-native-vector-icons/Feather';
const countries = [

  { country: 'Western Sahara', code: '212', iso: 'EH' },
  { country: 'Yemen', code: '967', iso: 'YE' },
  { country: 'Zambia', code: '260', iso: 'ZM' },
  { country: 'Zimbabwe', code: '263', iso: 'ZW' },
];
const App = () => {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState('');
  const searchRef = useRef();
  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(countries);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          width: WIDTH / 2.5,
          // height: 50,
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
          }
        }}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{ fontWeight: '600' }}>
          {selectedCountry == '' ? 'Select Country' : selectedCountry}
        </Text>
        <Icon name={clicked ? "" : ""} />

      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: 300,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="Search.."
            value={search}
            ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={{
              width: '100%',
              height: 50,
              alignSelf: 'center',
              borderWidth: 0.2,
              borderColor: '#8e8e8e',
              borderRadius: 7,
              marginTop: 20,
              paddingLeft: 20,
            }}
          />

          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '100%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
                  }}
                  onPress={() => {
                    setSelectedCountry(item.country);
                    setClicked(!clicked);
                    onSearch('');
                    setSearch('');
                  }}>
                  <Text style={{ fontWeight: '600' }}>{item.country}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default App;
