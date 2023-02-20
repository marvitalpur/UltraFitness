import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';
import {WIDTH} from '../assets/constants/Dimensions';
import {Fonts} from '../assets/constants/Fonts';
import Assets from '../assets';
import CardIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchbarCompo from './SeacrBar';
import Searcbar from './SeacrBar';
import ButtonComponent from './Button';
import {SearchIConGrey} from '../assets/svgs/SearchIcon';
const ProductCardlg = ({
  CardImageBG,
  CardImageBGMain,
  BtnTouchable1,
  BtnTouchable2,
  BoxtbtnText,
  BoxtText1,
  BoxtText2,
}) => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={CardImageBG}
        resizeMode="contain"
        style={{
          height: WIDTH < 390 && WIDTH >= 375 ? 165 : WIDTH < 375 ? 135 : 200,
          position: 'absolute',
          top: WIDTH < 390 && WIDTH >= 375 ? -35 : WIDTH < 375 ? -30 : -40,
          right: WIDTH < 390 && WIDTH >= 375 ? -170 : WIDTH < 375 ? -180 : -160,
          zIndex: 10,
        }}
      />
      <View
        style={{
          flex: 1,
          zIndex: 1,
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <ImageBackground
          source={CardImageBGMain}
          resizeMode="cover"
          style={{
            flex: 1,
            // flexDirection: 'row',
            // alignItems: 'flex-end',
            paddingLeft: WIDTH < 375 ? 15 : 15,
            paddingTop: WIDTH < 375 ? 15 : 25,
            paddingBottom: WIDTH < 375 ? 10 : 15,
          }}>
          <Text
            numberOfLines={2}
            style={{
              width: '70%',
              fontSize: WIDTH < 375 ? 18 : 24,
              color: Colors.tertiary,
              fontFamily: Fonts.default,
              fontWeight: '600',
              letterSpacing: 0.9,
            }}>
            {BoxtText1}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              width: '55%',
              marginTop: 5,
              fontSize: WIDTH < 375 ? 10 : 12,
              color: Colors.tertiary,
              fontFamily: Fonts.default,
              fontWeight: '300',
              lineHeight: WIDTH < 375 ? 13 : 16,
            }}>
            {BoxtText2}
          </Text>
          {BtnTouchable1 && (
            <TouchableRipple style={[styles.btn, {borderWidth: 1}]}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <CardIcon
                  style={{marginHorizontal: 2.5}}
                  name={'play-circle-outline'}
                  size={WIDTH < 375 ? 20 : 30}
                  color={Colors.tertiary}
                />
                <Text
                  style={{
                    fontFamily: Fonts.default,
                    color: Colors.tertiary,
                    fontSize: 12,
                  }}>
                  {BoxtbtnText}
                </Text>
              </View>
            </TouchableRipple>
          )}
          {BtnTouchable2 && (
            <TouchableRipple style={styles.btn}>
              <View
                style={{
                  height: WIDTH <= 375 ? 40 : 44,
                  width: WIDTH <= 323 ? 233 : 175,
                  // marginTop: 10,
                  // marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  backgroundColor: Colors.secondary,
                  alignSelf: 'center',
                  marginLeft: 70,
                }}>
                <ButtonComponent
                  paddingHorizontal={5}
                  SvgICon={<SearchIConGrey />}
                  buttonText="Get your Mentor Here"
                  buttonColor={Colors.secondary}
                  textColor={Colors.cards.GreyText}
                  // onPress={() => navigation.goBack()}
                  height={WIDTH <= 375 ? 40 : 54}
                  width={WIDTH <= 323 ? 233 : 175}
                />
              </View>
            </TouchableRipple>
          )}
        </ImageBackground>
      </View>
    </View>
  );
};

export default ProductCardlg;

const styles = StyleSheet.create({
  btn: {
    width: WIDTH < 375 ? 80 : 100,
    height: WIDTH < 375 ? 30 : 40,
    borderRadius: 20,
    marginTop: 'auto',

    borderColor: Colors.tertiary,
  },
});
