import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    FlatList,
    View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/constants/Colors';
import Header from '../components/Header';
import Lottie from 'lottie-react-native';
import Assets from '../assets';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import { CloudSvg, SearchIcon } from '../assets/svgs/HomeSvgs';
import { Fonts } from '../assets/constants/Fonts';
import { TouchableRipple } from 'react-native-paper';
import Products from '../components/Products';
import ProductCardSm from '../components/ProductCardSm';
import ProductCardmd from '../components/ProductCardmd';
import ProductCardlg from '../components/ProductCardlg';
import CardBox from '../components/CardBox';
import { BackSvg } from '../assets/svgs/HeaderSvgs';
import SessionCompo from '../components/SessionsComponent';

const Courses = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, paddingHorizontal: 25, }}>
                    <Header navigation={navigation} />
                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                        <View style={{ alignItems: 'center' }}>
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
                            style={{ flex: 1, justifyContent: 'space-evenly', marginLeft: 10 }}>
                            <Text style={styles.text}>Good</Text>
                            <Text style={styles.text}>Morning!</Text>
                            <Text
                                style={[
                                    styles.text,
                                    { letterSpacing: 0.6, fontSize: 12, fontWeight: '300' },
                                ]}>
                                23 December 2023
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            height: HEIGHT / 4.7,
                            flexDirection: 'row',
                            marginTop: 45,
                        }}>
                        <ProductCardlg CardImageBG={Assets.cards.cardImage7}
                            BoxtText1="Kids Mentor"
                            BoxtText2='Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
                            BoxtbtnText={'Go Now'}
                            BtnTouchable2 />
                    </View>
                    <View
                        style={{
                            height: HEIGHT / 6.9,
                            flexDirection: 'row',
                            alignSelf: 'center',
                            marginTop: 10
                        }}>
                        <FlatList
                            data={data}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            contentContainerStyle={{
                                paddingVertical: 10,
                            }}
                            ItemSeparatorComponent={<View style={{}} />}
                            renderItem={({ item, index }) => (
                                <CardBox flexDirection={'row'} ItemImage={true} image={item.image} name={item.name} backgroundColor={item.backgroundColor}
                                    textcolor={item.textcolor}
                                />)} />
                    </View>
                    <View
                        style={{ paddingHorizontal: 15, marginTop: 15 }}>
                        <Text style={styles.text}>Current Sessions:</Text>
                    </View>
                    <FlatList
                        data={data}
                        contentContainerStyle={{
                            // padding: 25,
                            marginTop: 20
                        }}
                        ItemSeparatorComponent={<View style={{ marginTop: 15, }} />}
                        renderItem={({ item, index }) => (
                            <SessionCompo
                                index={index}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                            />
                        )}></FlatList>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Courses;

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
var data = [
    {
        name: `Homework \n Assistance`,
        backgroundColor: '#FADDBA',
        textcolor: '#F2AC57',
        image: <BackSvg />
    },
    {
        name: `Social \n Interaction`,
        backgroundColor: '#C7EEF8',
        textcolor: '#FFFF',
        image: <BackSvg />
    },
    {
        name: `Skill \n Development`,
        backgroundColor: '#E7C6C6',
        textcolor: '#FFF',
        image: <BackSvg />
    },
];
