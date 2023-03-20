import {
  Image,
  ImageBackground,
  ImageBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import Header from '../components/Header';
import Lottie from 'lottie-react-native';
import Assets from '../assets';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {CloudSvg} from '../assets/svgs/HomeSvgs';
import {Fonts} from '../assets/constants/Fonts';
import {TouchableRipple} from 'react-native-paper';
import Products from '../components/Products';
import ProductCardSm from '../components/ProductCardSm';
import ProductCardmd from '../components/ProductCardmd';
import ProductCardlg from '../components/ProductCardlg';
import ButtonComponent from '../components/Button';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: 25}}>
          <Header headercompo1 navigation={navigation} />
          <View style={{flexDirection: 'row', marginTop: 25}}>
            <View style={{alignItems: 'center'}}>
              <Lottie
                source={Assets.animation.onboardAnimationSun}
                style={{
                  width: 80,
                  height: 80,
                  marginBottom: -35,
                  marginLeft: -1,
                }}
                autoPlay
                loop
              />
              <CloudSvg />
            </View>
            <View
              style={{flex: 1, justifyContent: 'space-evenly', marginLeft: 10}}>
              <Text style={styles.text}>Good</Text>
              <Text style={styles.text}>Morning!</Text>
              <Text
                style={[
                  styles.text,
                  {letterSpacing: 0.6, fontSize: 12, fontWeight: '300'},
                ]}>
                23 December 2023
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <ButtonComponent
                // icon1
                btnfonSize={WIDTH <= 375 ? 12 : 14}
                borderRadius={14}
                buttonText="Book me online"
                buttonColor={Colors.primary}
                textColor={Colors.secondary}
                onPress={() => navigation.navigate('InstructorDetails')}
                height={WIDTH <= 375 ? 55 : 55}
                width={WIDTH <= 323 ? 55 : 100}
              />
            </View>
          </View>
          {/* Cards start */}
          <View
            style={{
              height: HEIGHT / 4.5,
              flexDirection: 'row',
              marginTop: 45,
            }}>
            <ProductCardmd />
            <View style={{width: 20}} />
            <View style={{flex: 1}}>
              <ProductCardSm
                OnpresCard={() => {
                  navigation.navigate('QRCode');
                }}
                img={Assets.backgroundImages.cardBackground1}
                text="Training"
              />
              <View style={{height: 20}} />
              <ProductCardSm
                img={Assets.backgroundImages.cardBackground2}
                text="Training"
              />
            </View>
          </View>
          <View
            style={{
              height: HEIGHT / 4.7,
              flexDirection: 'row',
              marginTop: 45,
            }}>
            <ProductCardlg
              image1
              BtnTouchable1
              CardImageBG={Assets.cards.cardImage7}
              CardImageBGMain={Assets.backgroundImages.cardBackground3}
              BoxtText1="Kids Hope"
              BoxtText2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
              BoxtbtnText={'Go Now'}
            />
          </View>
        </View>

        <Products />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
});
