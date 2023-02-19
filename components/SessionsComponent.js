import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { Fonts } from '../assets/constants/Fonts';
import { WIDTH } from '../assets/constants/Dimensions';
import { Colors } from '../assets/constants/Colors';
import { ProgressBar, MD3Colors } from 'react-native-paper';


const SessionCompo = ({ name, image, description, price, index, backgroundColor }) => {
    return (
        <>
            <View
                style={[
                    styles.card,
                    {
                        flexDirection: 'row',
                        marginBottom: 10,
                        // // backgroundColor: backgroundColor,
                        // marginRight: index % 2 == 2 ? 0 : 10,
                        // marginLeft: index % 2 == 0 ? 0 : 5,
                    },
                ]}>
            </View>
        </>
    );
};

export default SessionCompo;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 86,
        backgroundColor: '#FFFFFF',
        // justifyContent: "center",
        // alignItems: 'center',
        padding: 10,
        borderRadius: 86,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    productImage: {
        height: '45%',
        borderRadius: 100,
        marginTop: 25,
        backgroundColor: 'red'





    },
    productName: {
        // // width: '70%',
        // fontFamily: Fonts.default,
        // fontWeight: '600',
        // letterSpacing: 0.9,
        // textTransform: 'capitalize',
        // color: '#AAAAAA',
    },
    productDesc: {
        // fontSize: 12,
        // fontFamily: Fonts.default,
        // fontWeight: '300',
        // color: '#AAAAAA',
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


// var data = [
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage1,
//     },
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage2,
//     },
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage3,
//     },
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage4,
//     },
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage5,
//     },
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage6,
//     },
// ];

