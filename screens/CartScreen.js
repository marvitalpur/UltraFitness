import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import Header from '../components/Header';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {Fonts} from '../assets/constants/Fonts';
import CartItems from '../components/CartITems';
import Table from '../components/TableData';
import ButtonComponent from '../components/Button';
import Assets from '../assets';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';

const CartScreen = ({navigation}) => {
  const [check, setChecked] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      image: Assets.cards.cardImage1,
      description: 'Home Equipment Push Up Bars',
      count: 2,
      checked: false,
    },
    {
      id: 2,
      image: Assets.cards.cardImage2,
      description: 'Fitness Tracker Watch',
      count: 1,
      checked: true,
    },
  ]);
  const increment = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, count: item.count + 1} : item,
      ),
    );
  };

  const decrement = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, count: item.count - 1} : item,
      ),
    );
  };
  const toggleChecked = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, checked: !item.checked} : item,
      ),
    );
  };
  const removeItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  const [count, setCount] = useState(2);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingHorizontal: 15}}>
          <Header
            navigation={navigation}
            onlybackbutton
            backIcon
            headertex={'Cart'}
          />
        </View>
        <View style={{marginTop: 25, paddingHorizontal: 5}}>
          {items.map(item => (
            <>
              <View
                style={{
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Checkbox
                    value={item.checked}
                    onValueChange={() => toggleChecked(item.id)}
                  />
                </View>
                <CartItems
                  key={item.id}
                  card1
                  status={check}
                  checkpress={item.checkpress}
                  itemimage={item.image}
                  itemdescription={item.description}
                  count={item.count}
                  increment={() => increment(item.id)}
                  decrement={() => decrement(item.id)}
                />
              </View>
              <TouchableOpacity
                onPress={() => removeItem(item.id)}
                style={{
                  width: 26,
                  height: 26,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'red',
                  borderRadius: 100,
                  position: 'absolute',
                  right: 1,
                }}>
                <Icon name="close" color={'#fff'} size={20} />
              </TouchableOpacity>
            </>
          ))}
        </View>

        <View style={{marginTop: 25}}>
          <View style={styles.line} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
            }}>
            <Text style={styles.text}>Summary</Text>
          </View>
          <View style={{paddingHorizontal: 25, paddingTop: 25}}>
            <Table />
          </View>
          <View style={[styles.line, {width: '80%'}]} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
            }}>
            <Text style={styles.text}>Total Amount:</Text>
            <Text style={styles.text}>$215.00</Text>
          </View>

          <View
            style={{
              marginTop: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <ButtonComponent
              borderRadius={14}
              buttonText="Proceed to Checkout"
              buttonColor={Colors.tertiary}
              textColor={Colors.secondary}
              onPress={() => navigation.navigate('GoogleMapsScreen')}
              // onPress={() => navigation.navigate('GoogleMapsScreen')}
              height={WIDTH <= 375 ? 55 : 55}
              width={WIDTH <= 323 ? 260 : 300}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

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
  line: {
    width: '25%',
    alignSelf: 'center',
    borderBottomColor: '#000',
    backgroundColor: '#707070 ',
    opacity: 0.15,
    borderBottomWidth: 2,
    marginVertical: 15,
  },
});
