import {StyleSheet, Text, View, ImageBackground, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Assets from '../assets';
import {BackgroundOverlay} from '../assets/svgs/OnboardSvg';
import {Colors} from '../assets/constants/Colors';
import ButtonComponent from '../components/Button';
import deviceInfoModule from 'react-native-device-info';
import {FAB} from 'react-native-paper';
import Lottie from 'lottie-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
  interpolateColor,
} from 'react-native-reanimated';
import {WIDTH, HEIGHT} from '../assets/constants/Dimensions';
import {Fonts} from '../assets/constants/Fonts';

let hasNotch = deviceInfoModule.hasNotch();

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  // ReAnimated Initials Values
  const progress = useSharedValue(0);
  const progressIndicator = useSharedValue(13);
  const progressIndicator1 = useSharedValue(13);
  const progressIndicator2 = useSharedValue(13);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);
  const reanimatedIndicatorStyle = useAnimatedStyle(() => {
    return {
      width: progressIndicator.value,
    };
  }, []);
  const reanimatedIndicator1Style = useAnimatedStyle(() => {
    return {
      width: progressIndicator1.value,
    };
  }, []);
  const reanimatedIndicator2Style = useAnimatedStyle(() => {
    return {
      width: progressIndicator2.value,
    };
  }, []);
  const indicatorColor = useDerivedValue(() => {
    return withTiming(currentSlideIndex > 0 ? 0 : 1);
  });

  const reanimatedIndicatorColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      indicatorColor.value,
      [0, 1],
      [Colors.primary, Colors.secondary],
    );
    return {
      backgroundColor,
    };
  });

  useEffect(() => {
    if (currentSlideIndex > 0) {
      progress.value = withSpring(1);
    } else {
      progress.value = withSpring(0);
    }
    if (currentSlideIndex === 0) {
      progressIndicator.value = withSpring(42);
    } else {
      progressIndicator.value = withSpring(13);
    }
    if (currentSlideIndex === 1) {
      progressIndicator1.value = withSpring(42);
    } else {
      progressIndicator1.value = withSpring(13);
    }
    if (currentSlideIndex === 2) {
      progressIndicator2.value = withSpring(42);
    } else {
      progressIndicator2.value = withSpring(13);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlideIndex]);

  // Onboard Slide Functions
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WIDTH);
    setCurrentSlideIndex(currentIndex);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (currentSlideIndex === 2) {
      navigation.replace('Login');
      return;
    }
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const goToPrevSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (currentSlideIndex === 0) {
      return;
    }
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  return (
    <>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slides}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        horizontal
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={WIDTH}
        onScrollEndDrag={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({item}) => <Slide item={item} />}
      />
      <Indicators
        currentSlideIndex={currentSlideIndex}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        navigation={navigation}
        reanimatedStyle={reanimatedStyle}
        reanimatedIndicatorStyle={reanimatedIndicatorStyle}
        reanimatedIndicator1Style={reanimatedIndicator1Style}
        reanimatedIndicator2Style={reanimatedIndicator2Style}
        reanimatedIndicatorColorStyle={reanimatedIndicatorColorStyle}
      />
    </>
  );
};

export default Onboarding;

const Slide = ({item}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH,
        height: HEIGHT,
      }}>
      <ImageBackground
        source={item.id === 1 && Assets.backgroundImages.onboard}
        resizeMode="cover"
        style={[
          styles.image,
          {backgroundColor: item.id !== 1 ? Colors.secondary : 'transparent'},
        ]}>
        {item.id === 1 && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}>
            <BackgroundOverlay width={WIDTH} height={HEIGHT} />
          </View>
        )}
        <View
          style={{
            width: WIDTH,
            height: HEIGHT / 2.5,
            alignItems: 'center',
          }}>
          {item.id !== 1 && (
            <>
              <View
                style={{
                  width: WIDTH < 375 ? 70 : 80,
                  height: WIDTH < 375 ? 70 : 80,
                  position: 'absolute',
                  right: 30,
                  top: -15,
                }}>
                <Lottie
                  source={Assets.animation.onboardAnimationSun}
                  style={{
                    width: WIDTH < 375 ? 70 : 80,
                    height: WIDTH < 375 ? 70 : 80,
                  }}
                  autoPlay
                  loop
                />
              </View>
              <Lottie
                source={item.animation}
                style={{width: WIDTH, height: HEIGHT / 2.5}}
                autoPlay
                loop
              />
            </>
          )}
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            paddingTop: HEIGHT < 700 ? HEIGHT / 15 : HEIGHT / 12.5,
          }}>
          {item.id === 1 ? (
            <>
              <Text
                style={[
                  styles.title,
                  {
                    lineHeight: HEIGHT < 700 ? 40 : 55,
                  },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit>
                Get Yourself <Text style={{fontWeight: 400}}>Healthy</Text>
              </Text>
              <Text
                style={[
                  styles.title,
                  {
                    lineHeight: HEIGHT < 700 ? 40 : 55,
                  },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit>
                &<Text style={{fontWeight: 400}}> Strong </Text>
                with Us!
              </Text>
            </>
          ) : item.id === 2 ? (
            <>
              <Text
                style={[
                  styles.title,
                  {color: Colors.tertiary, lineHeight: HEIGHT < 700 ? 40 : 55},
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit>
                Get Yourself{' '}
                <Text style={{fontWeight: 400, color: Colors.primary}}>
                  Healthy
                </Text>
              </Text>
              <Text
                style={[
                  styles.title,
                  {color: Colors.tertiary, lineHeight: HEIGHT < 700 ? 40 : 55},
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit>
                &
                <Text style={{fontWeight: 400, color: Colors.primary}}>
                  {' '}
                  Strong{' '}
                </Text>
                with Us!
              </Text>
            </>
          ) : item.id === 3 ? (
            <>
              <Text
                style={[
                  styles.title,
                  {color: Colors.tertiary, lineHeight: HEIGHT < 700 ? 40 : 55},
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit>
                <Text style={{fontWeight: 400, color: Colors.primary}}>
                  Transform
                </Text>{' '}
                your life
              </Text>
              <Text
                style={[
                  styles.title,
                  {color: Colors.tertiary, lineHeight: HEIGHT < 700 ? 40 : 55},
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit>
                for
                <Text style={{fontWeight: 400, color: Colors.primary}}>
                  {' '}
                  Better{' '}
                </Text>
              </Text>
            </>
          ) : null}
          <Text
            style={[
              styles.subTitle,
              {
                color: item.id !== 1 ? Colors.tertiary : Colors.secondary,
                lineHeight: HEIGHT < 700 ? 25 : 30,
              },
            ]}
            numberOfLines={2}
            adjustsFontSizeToFit>
            {item.subtitle}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const Indicators = ({
  currentSlideIndex,
  goToPrevSlide,
  goToNextSlide,
  reanimatedStyle,
  reanimatedIndicatorStyle,
  reanimatedIndicator1Style,
  reanimatedIndicator2Style,
  reanimatedIndicatorColorStyle,
}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: hasNotch ? 25 : 15,
        left: 0,
        right: 0,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Animated.View style={[reanimatedStyle]}>
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
            color={Colors.secondary}
            onPress={() => goToPrevSlide()}
          />
        </Animated.View>
        <ButtonComponent
          btnfonSize={16}
          borderRadius={50}
          buttonText="Next"
          icon="arrow-right"
          buttonColor={Colors.secondary}
          textColor={Colors.primary}
          onPress={() => goToNextSlide()}
          height={WIDTH < 375 ? 40 : 55}
          width={WIDTH < 375 ? 110 : 150}
          viewOnRight={true}
        />
      </View>
      {/* Indicator container */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: HEIGHT / 20,
        }}>
        {/* Render indicator */}
        {slides.map((_, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.indicator,
                index === 0 && reanimatedIndicatorStyle,
                index === 1 && reanimatedIndicator1Style,
                index === 2 && reanimatedIndicator2Style,
                reanimatedIndicatorColorStyle,
                currentSlideIndex == index && {
                  opacity: 1,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: HEIGHT,
    width: WIDTH,
    paddingTop: HEIGHT / 12.5,
  },
  title: {
    fontFamily: Fonts.default,
    fontSize: 34.25,
    fontWeight: 700,
    color: Colors.secondary,
    letterSpacing: 1.75,
  },
  subTitle: {
    fontFamily: Fonts.default,
    fontSize: 16,
    fontWeight: 200,
    color: Colors.secondary,
    marginTop: 0,
    marginBottom: 65,
  },
  indicator: {
    height: 13,
    width: 13,
    opacity: 0.5,
    marginHorizontal: 3,
    borderRadius: 10,
  },
  fab: {
    height: 55,
    width: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tertiary,
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

const slides = [
  {
    id: 1,
    title: 'Get Yourself Healthy & Strong with Us!',
    subtitle:
      'Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam nonumy eirmod tempor',
  },
  {
    id: 2,
    title: 'Get Yourself Healthy & Strong with Us!',
    subtitle:
      'Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam nonumy eirmod tempor',
    animation: Assets.animation.onboardAnimation2,
  },
  {
    id: 3,
    title: 'Transform your life for Better!',
    subtitle:
      'Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam nonumy eirmod tempor',
    animation: Assets.animation.onboardAnimation3,
  },
];
