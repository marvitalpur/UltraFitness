import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Fonts} from '../assets/constants/Fonts';
import {WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

const GraphCompnent = ({name, image, description, price, index}) => {
  console.log(image);
  return (
    <View
      style={[
        styles.card,
        {
          paddingBottom: 5,
          marginRight: index % 2 == 10 ? 5 : 0,
          marginLeft: index % 2 == 10 ? 10 : 0,
          // backgroundColor: 'red',
        },
      ]}>
      <>
        <View style={styles.texline}>
          <Text
            style={[
              styles.text,

              {
                color: Colors.tertiary,
                opacity: 0.7,
              },
            ]}>
            Activities
          </Text>
          <Text style={[styles.text, {color: Colors.primary}]}>Weekly</Text>
        </View>
        <LineChart
          bezier
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
              {
                data: [2, 4, 8, 12, 10, 8],
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width - 50}
          height={170}
          // height={Dimensions.get('window').width}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2,
            //   color: (opacity = 1) => `rgba(rgba(0, 180, 216, 1), ${opacity})`,
            color: (opacity = 1) => `rgba(rgba(0, 180, 216, 1), ${opacity})`,
            labelColor: (opacity = 0.6) => `rgba(rgba(0, 0, 2,1), ${opacity})`,

            style: {
              borderRadius: 20,
            },
          }}
          style={{
            borderRadius: 16,
            color: '#000',
          }}
        />
      </>
    </View>
  );
};

export default GraphCompnent;

const styles = StyleSheet.create({
  texline: {
    // width: '100%',
    paddingHorizontal: 15,
    // marginBottom: 2,
    flexDirection: 'row',
    // alignSelf: 'center',
    justifyContent: 'space-between',
    // marginBottom: 8,
  },
  bannerSmallBox: {
    flex: 1,
    zIndex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    paddingBottom: 15,
    backgroundColor: 'yellow',
    paddingVertical: 5,
  },
  card: {
    flex: 1,
    // height: 220,
    backgroundColor: '#fff',
    // paddingBottom: 5,
    marginBottom: 'auto',
    // paddingTop: 5,
    borderRadius: 20,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  productImage: {},
  productName: {
    width: '70%',
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#AAAAAA',
  },
  text: {
    marginVertical: 5,
    fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 18,
    color: Colors.tertiary,
    letterSpacing: 0.9,
  },
  productDesc: {
    fontSize: 12,
    fontFamily: Fonts.default,
    fontWeight: '300',
    color: '#AAAAAA',
  },
  priceBox: {
    width: '70%',
    height: 28,
    backgroundColor: '#ECF9FF',
    marginLeft: 'auto',
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.tertiary,
  },
});
