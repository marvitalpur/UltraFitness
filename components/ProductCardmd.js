import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import { Colors } from '../assets/constants/Colors';
import { WIDTH } from '../assets/constants/Dimensions';
import { Fonts } from '../assets/constants/Fonts';
import Assets from '../assets';

const ProductCardmd = ({ onPress }) => {
  return (
    <TouchableRipple

      style={{
        flex: 1,
        backgroundColor: Colors.cards.lightBlue,
        borderRadius: 20,
      }}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          height: '100%',
          paddingLeft: WIDTH < 375 ? 5 : 10,
          paddingBottom: WIDTH < 375 ? 10 : 15,
        }}>
        <Text
          numberOfLines={2}
          style={{
            // width: '80%',
            fontSize: WIDTH < 375 ? 13 : 15,
            color: Colors.primary,
            fontFamily: Fonts.default,
            fontWeight: '700',
            letterSpacing: 0.9,
          }}>
          Sports{'\n'}Vision Training
        </Text>
        <Image
          source={Assets.cards.cardImage}
          resizeMode="contain"
          style={{
            height: WIDTH < 390 && WIDTH >= 375 ? 180 : WIDTH < 375 ? 150 : 230,
            position: 'absolute',
            top: WIDTH < 390 && WIDTH >= 375 ? -25 : WIDTH < 375 ? -20 : -35,
            right:
              WIDTH < 390 && WIDTH >= 375 ? -100 : WIDTH < 375 ? -110 : -90,
          }}
        />
      </View>
    </TouchableRipple>
  );
};

export default ProductCardmd;

const styles = StyleSheet.create({});
