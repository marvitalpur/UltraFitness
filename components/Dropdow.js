import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const fruits = [
  {name: 'Apple', id: 1},
  {name: 'Banana', id: 2},
  {name: 'Orange', id: 3},
  {name: 'Mango', id: 4},
];
const Dropdown = () => {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(fruits);
  const [selectedFruit, setSelectedFruit] = useState('');
  const searchRef = useRef();
  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(fruits);
    }
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.inputBtn}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={styles.btnText}>
          {selectedFruit == '' ? 'Fruit' : selectedFruit}
        </Text>
        <Icon name={clicked ? 'chevron-up' : 'chevron-down'} />
      </TouchableOpacity>
      {clicked ? (
        <View style={[styles.btnText, {flex: 1}]}>
          <TextInput
            placeholder="Search.."
            value={search}
            ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={[styles.btnText]}
          />

          <FlatList
            data={data}
            renderItem={({item, index}) => {
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
                    setSelectedFruit(item.name);
                    setClicked(!clicked);
                    onSearch('');
                    setSearch('');
                  }}>
                  <Text style={{fontWeight: '600'}}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  inputBtn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 15,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
  },
  btnText: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: '200',
  },
});
