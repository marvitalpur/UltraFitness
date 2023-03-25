import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { CloudSvg } from '../assets/svgs/HomeSvgs';
import Lottie from 'lottie-react-native';
import Assets from '../assets';
import { HEIGHT } from '../assets/constants/Dimensions';
import ProductCardmd from '../components/ProductCardmd';
import ProductCardlg from '../components/ProductCardlg';
import CardLG from '../components/CArdComponentLG';
import { FlatList } from 'react-native';
import { CupIcon, ShareIConBG, SimpleCupI, SimpleShareI, TeacherIconBG } from '../assets/svgs/SearchIcon';
import SessionCompo from '../components/SessionsComponent';
import { Colors } from '../assets/constants/Colors';


const SportsScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ paddingHorizontal: 15 }}>
                        <Header
                            navigation={navigation}
                            headertex="Exercise Session"
                            backIcon1
                        />
                    </View>
                    <View
                        style={{
                            height: HEIGHT / 3.7,
                            flexDirection: 'row',
                            marginTop: 45,
                            paddingHorizontal: 15
                        }}>
                        <ProductCardlg
                            image3
                            BtnTouchable2
                            CardImageBG={Assets.cards.cardImage}
                            // CardImageBGMain={Assets.cards.cardImage11}
                            BoxtText1="Kids Hope"
                            BoxtText2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
                            BoxtbtnText={'Get your Mentor Here'}
                        />
                    </View>
                    <FlatList
                        data={data1}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        contentContainerStyle={{
                            flexGrow: 1,
                            paddingHorizontal: 15,
                            // marginBottom: -15,
                        }}
                        ItemSeparatorComponent={<View style={{}} />}
                        renderItem={({ item, index }) => (
                            <View
                                style={{
                                    // paddingLeft: 5,
                                    height: HEIGHT / 8.7,
                                    flexDirection: 'row',
                                    marginTop: 35,
                                }}>
                                <CardLG
                                    // flexDirection={'row'}
                                    ItemImage={true}
                                    image={item.image}
                                    name={item.name}
                                    progressName={item.progressName}
                                    backgroundColor={item.backgroundColor}
                                    textcolor={item.textcolor}
                                />
                            </View>
                        )}
                    />

                    <View
                        style={{
                            paddingHorizontal: 10,
                            marginTop: 15,
                            paddingHorizontal: 15,
                        }}>
                        <Text style={styles.text}>Current Sessions:</Text>
                    </View>
                    <View
                        style={{
                            height: 200,
                            // backgroundColor: 'red',
                            // paddingHorizontal: 15,
                        }}>
                        <FlatList
                            data={data}
                            contentContainerStyle={{
                                flexGrow: 1,
                                paddingHorizontal: 15
                            }}
                            ItemSeparatorComponent={<View style={{}} />}
                            renderItem={({ item, index }) => (
                                <SessionCompo
                                    ExerciseCompo
                                    index={index}
                                    name={item.name}
                                    backgroundColor={item.backgroundColor}
                                    progressName={item.progressName}
                                    textColor={item.textcolor}
                                    progressColor={item.progressColor}
                                    progresstextColor={item.backgroundColor}
                                    image={item.image1}
                                />
                            )}></FlatList>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        // fontFamily: Fonts.default,
        fontWeight: '600',
        fontSize: 18,
        // color: Colors.tertiary,
        color: '#000',
        letterSpacing: 0.9,
    },

})
var data1 = [
    {
        name: `All`,
        backgroundColor: '#FFFF',
        imagebackgroundColor1: '#FFFF',
        textcolor: Colors.primary,
    },
    {
        name: `Daily Sessions`,
        backgroundColor: '#FADDBA',
        imagebackgroundColor1: '#FADDBA',
        textcolor: '#F2AC57',

    },
    {
        name: `Weekly Sessions`,
        backgroundColor: '#C7EEF8',
        imagebackgroundColor1: '#C7EEF8',
        textcolor: '#FFFF',

    },
    {
        name: 'Skill \n Development',
        backgroundColor: '#E7C6C6',
        imagebackgroundColor1: '#E7C6C6',
        textcolor: '#fff',

    },
];
var data = [
    {

        progressName: 'Social Interection',
        backgroundColor: '#B0E8F3',
        // progressColor: '#F2AC57',
        progressColor: '#00B4D8',
        // textcolor: '#F2AC57',
        image1: <ShareIConBG />,
        progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },
    {

        backgroundColor: '#FADDBA',
        textcolor: '#FFFF',
        progressColor: '#F2AC57',
        progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',

        image1: <TeacherIconBG />,
    },
    {

        backgroundColor: '#E7C6C6',
        textcolor: '#FFF',
        progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
        progressColor: '#C97272',
        image1: <CupIcon />,
    },
    {

        backgroundColor: '#E7C6C6',
        textcolor: '#FFF',
        progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
        progressColor: '#C97272',

        image1: <CupIcon />,
    },
];

export default SportsScreen

