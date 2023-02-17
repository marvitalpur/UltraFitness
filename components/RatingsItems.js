import {View, Text} from 'react-native';
import React from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';

const RatingsItems = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Rating
        type="star"
        ratingCount={5}
        imageSize={20}
        // showRating
        // ratingContainerStyle={{marginTop: 30}}
        ratingTextColor="#000"
        backgroundColor="transparent"
        // onFinishRating={this.ratingCompleted}
      />
      <Text style={{color: '#000', fontSize: 15, paddingLeft: 5}}>(05)</Text>
    </View>
  );
};

export default RatingsItems;
