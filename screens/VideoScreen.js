import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {FlatList} from 'react-native';
import SessionCompo from '../components/SessionsComponent';
import Assets from '../assets';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';
import {Fonts} from '../assets/constants/Fonts';
import Video from 'react-native-video';
import {PlayIcon} from '../assets/svgs/HomeSvgs';

const VideoScreen = ({navigation, route}) => {
  // const { image1 } = route.params;
  // const { Exercisename1 } = route.params;
  // const { Exercisename2 } = route.params;

  var data = [
    {
      progressName: 'Social Interection',
      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.ProfileImages.image1,
      progressName: '',
    },
    {
      progressName: 'Social Interection',

      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.ProfileImages.image2,
      progressName: '',
    },
    {
      progressName: 'Social Interection',

      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.ProfileImages.image3,
      progressName: '',
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{paddingHorizontal: 15}}>
            <Header navigation={navigation} headertex="Session" backIcon1 />
          </View>
          <View
            style={{
              // height: 200,
              marginTop: 20,
              // backgroundColor: 'red',
            }}>
            <View style={{paddingHorizontal: 10}}>
              <View>
                <View style={{marginTop: 25}}>
                  <Image
                    source={Assets.ProfileImages.videoimg}
                    style={{
                      alignSelf: 'center',
                      height:
                        WIDTH < 390 && WIDTH >= 375
                          ? 160
                          : WIDTH < 375
                          ? 135
                          : 274,
                      position: 'absolute',
                      top:
                        WIDTH < 390 && WIDTH >= 375
                          ? -35
                          : WIDTH < 375
                          ? -30
                          : -20,
                      right:
                        WIDTH < 390 && WIDTH >= 375
                          ? -170
                          : WIDTH < 375
                          ? -180
                          : -230,
                      zIndex: 10,
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    top:
                      WIDTH < 390 && WIDTH >= 375
                        ? -35
                        : WIDTH < 375
                        ? -3
                        : 100,
                    right:
                      WIDTH < 390 && WIDTH >= 375
                        ? -170
                        : WIDTH < 375
                        ? -10
                        : 150,
                    zIndex: 10,
                  }}>
                  <PlayIcon />
                </View>
                <Video
                  source={{uri: 'https://example.com/video.mp4'}}
                  style={{width: 320, height: 240}}
                />
              </View>
            </View>

            <View style={{paddingHorizontal: 25, marginTop: 25}}>
              <Text
                numberOfLines={1}
                style={[styles.text, {fontFamily: Fonts.default}]}>
                Description:
              </Text>
              <Text
                numberOfLines={10}
                style={[styles.text, {fontSize: 10, marginVertical: 15}]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est..
              </Text>
              <Text
                numberOfLines={1}
                style={[styles.text, {fontFamily: Fonts.default}]}>
                Next Videos:
              </Text>
            </View>

            <FlatList
              data={data}
              contentContainerStyle={{marginTop: 10}}
              renderItem={({item, index}) => (
                <SessionCompo
                  playcompo
                  image={item.image1}
                  onPress={() => navigation.navigate('VideoScreen')}
                />
              )}></FlatList>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: '300',
    fontSize: 18,
    color: Colors.tertiary,
    color: '#000',
    letterSpacing: 0.9,
  },
});

export default VideoScreen;
