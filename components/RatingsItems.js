import {View, Text} from 'react-native';
import React from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';

const RatingsItems = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Rating
        type="star"
        ratingCount={5}
        imageSize={12}
        // showRating
        style={{marginTop: 5, paddingLeft: 3}}
        ratingTextColor="#000"
        backgroundColor="transparent"
        // onFinishRating={this.ratingCompleted}
      />
      <Text style={{color: '#000', fontSize: 12, paddingLeft: 5, marginTop: 2}}>
        (05)
      </Text>
    </View>
  );
};

export default RatingsItems;
