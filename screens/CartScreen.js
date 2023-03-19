// import {
//     Image,
//     ImageBackground,
//     ScrollView,
//     StyleSheet,
//     Text,
//     FlatList,
//     View,
// } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Colors } from '../assets/constants/Colors';
// import Header from '../components/Header';
// import Lottie from 'lottie-react-native';
// import Assets from '../assets';
// import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
// import { CloudSvg, SearchIcon } from '../assets/svgs/HomeSvgs';
// import { Fonts } from '../assets/constants/Fonts';
// import ProductCardlg from '../components/ProductCardlg';
// import CardBox from '../components/CardBox';
// import { BackSvg } from '../assets/svgs/HeaderSvgs';
// import SessionCompo from '../components/SessionsComponent';
// import {
//     CupIcon,
//     SearchIConGrey,
//     ShareICon,
//     ShareIConBG,
//     SimpleCupI,
//     SimpleShareI,
//     SimpleTeacherI,
//     TeacherIconBG,
//     index,
// } from '../assets/svgs/SearchIcon';
// import CardLG from '../components/CArdComponentLG';

// const CoursesScreen = ({ navigation }) => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <ScrollView
//                 bounces={false}
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{ flexGrow: 1 }}>
//                 <View style={{ flex: 1 }}>
//                     <View style={{ paddingHorizontal: 15 }}>
//                         <Header navigation={navigation} />
//                     </View>
//                     <View style={{ flexDirection: 'row', marginTop: 25 }}>
//                         <View style={{ alignItems: 'center', paddingHorizontal: 25 }}>
//                             <Lottie
//                                 source={Assets.animation.onboardAnimationSun}
//                                 style={{
//                                     width: 80,
//                                     height: 80,
//                                     marginBottom: -35,
//                                     marginLeft: -1,
//                                 }}
//                                 autoPlay
//                                 loop
//                             />
//                             <CloudSvg />
//                         </View>
//                         <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
//                             <Text style={styles.text}>Good</Text>
//                             <Text style={styles.text}>Morning!</Text>
//                             <Text
//                                 style={[
//                                     styles.text,
//                                     { letterSpacing: 0.6, fontSize: 12, fontWeight: '300' },
//                                 ]}>
//                                 23 December 2023
//                             </Text>
//                         </View>
//                     </View>
//                     <View
//                         style={{
//                             marginRight: index % 2 == 10 ? 5 : 10,
//                             marginLeft: index % 2 == 10 ? 10 : 0,
//                         }}>
//                         <View
//                             style={{
//                                 marginRight: 10,
//                                 marginLeft: 15,
//                                 height: HEIGHT / 4.6,
//                                 flexDirection: 'row',
//                                 marginTop: 45,
//                                 // paddingHorizontal: 10
//                             }}>
//                             <ProductCardlg
//                                 image2
//                                 BtnTouchable2
//                                 CardImageBG={Assets.cards.cardImage9}
//                                 CardImageBGMain={Assets.cards.cardImage11}
//                                 BoxtText1="Kids Hope"
//                                 BoxtText2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
//                                 BoxtbtnText={'Go Now'}
//                             />
//                         </View>
//                     </View>

//                     <View
//                         style={{
//                             height: HEIGHT / 9.9,
//                             flexDirection: 'row',
//                             alignSelf: 'center',
//                             //   paddingBottom: 5,
//                             marginTop: 15,
//                             // paddingLeft: 15,
//                         }}>
//                         <FlatList
//                             data={data1}
//                             showsHorizontalScrollIndicator={false}
//                             horizontal={true}
//                             contentContainerStyle={{
//                                 flexGrow: 1,
//                                 paddingHorizontal: 15,
//                                 // marginBottom: -15,
//                             }}
//                             ItemSeparatorComponent={<View style={{}} />}
//                             renderItem={({ item, index }) => (
//                                 <View style={{}}>
//                                     <CardLG
//                                         // flexDirection={'row'}
//                                         ItemImage={true}
//                                         image={item.image}
//                                         name={item.name}
//                                         progressName={item.progressName}
//                                         backgroundColor={item.backgroundColor}
//                                         textcolor={item.textcolor}
//                                     />
//                                 </View>
//                             )}
//                         />
//                     </View>
//                     <View
//                         style={{
//                             paddingHorizontal: 10,
//                             marginTop: 15,
//                             paddingHorizontal: 15,
//                         }}>
//                         <Text style={styles.text}>Current Sessions:</Text>
//                     </View>
//                     <View
//                         style={{
//                             // paddingHorizontal: 15,
//                         }}>
//                         <FlatList
//                             data={data}
//                             contentContainerStyle={{
//                                 // padding: 25,
//                                 flexGrow: 1,
//                                 marginTop: 10,
//                             }}
//                             ItemSeparatorComponent={<View style={{}} />}
//                             renderItem={({ item, index }) => (
//                                 <SessionCompo
//                                     progresscompo
//                                     index={index}
//                                     name={item.name}
//                                     backgroundColor={item.backgroundColor}
//                                     progressName={item.progressName}
//                                     textColor={item.textcolor}
//                                     progressColor={item.progressColor}
//                                     progresstextColor={item.backgroundColor}
//                                     description={item.description}
//                                     image={item.image1}
//                                 />
//                             )}></FlatList>
//                     </View>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// export default CoursesScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: Colors.secondary,
//     },
//     text: {
//         fontFamily: Fonts.default,
//         fontWeight: '600',
//         fontSize: 18,
//         color: Colors.tertiary,
//         letterSpacing: 0.9,
//     },
//     card: {
//         // width: '90%',

//         flex: 1,
//         height: 86,
//         // backgroundColor: '#FFFFFF',
//         borderRadius: 10,
//         shadowColor: '#000',
//         justifyContent: 'center',
//         alignItems: 'center',
//         shadowOffset: {
//             width: 0,
//             height: 7,
//         },
//         shadowOpacity: 0.43,
//         shadowRadius: 9.51,

//         elevation: 15,
//     },
// });
// var data = [
//     {
//         name: `Session Name`,
//         progressName: 'Social Interection',
//         backgroundColor: '#B0E8F3',
//         progressColor: '#F2AC57',
//         progressColor: '#00B4D8',
//         textcolor: '#F2AC57',

//         image1: <ShareIConBG />,
//         progressName: 'Session Name',
//     },
//     {
//         name: `Session Name`,
//         progressName: 'Social Interection',
//         backgroundColor: '#FADDBA',
//         textcolor: '#FFFF',
//         progressColor: '#F2AC57',
//         progressName: 'Session Name',

//         image1: <TeacherIconBG />,
//     },
//     {
//         name: `Session Name`,
//         progressName: 'Social Interection',
//         backgroundColor: '#E7C6C6',
//         textcolor: '#FFF',
//         progressName: 'Session Name',
//         progressColor: '#C97272',

//         image1: <CupIcon />,
//     },
// ];
// var data1 = [
//     {
//         name: `Homework \nAssistance`,
//         backgroundColor: '#FADDBA',
//         imagebackgroundColor1: '#FADDBA',
//         textcolor: '#F2AC57',
//         image: <SimpleTeacherI />,
//     },
//     {
//         name: `Social \nInteraction`,
//         backgroundColor: '#C7EEF8',
//         imagebackgroundColor1: '#C7EEF8',
//         textcolor: '#FFFF',
//         image: <SimpleShareI />,
//     },
//     {
//         name: 'Skill \n Development',
//         backgroundColor: '#E7C6C6',
//         imagebackgroundColor1: '#E7C6C6',
//         textcolor: '#fff',
//         image: <SimpleCupI />,
//     },
// ];


import React from 'react';
import Lottie from 'lottie-react-native';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/constants/Colors';
import { Fonts } from '../assets/constants/Fonts';
import ProfileHeader from '../components/profileHeader';
import Assets from '../assets';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import { TouchableRipple } from 'react-native-paper';
import { EditSvg } from '../assets/svgs/HeaderSvgs';
import ButtonComponent from '../components/Button';
import ColorBox from '../components/ColorBox';
import CardBox from '../components/CardBox';
const Shope = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <ProfileHeader
                        BGImage={Assets.backgroundImages.headerBackground2}
                        avatarId={'@rubelmuricio'}
                        avatarName={'Rubel Muricio'}
                        onPress={() => navigation.goBack()}
                        // EditIcon={true}
                        header2
                        rating
                    />
                </View>

                <View style={{
                    padding: 5

                }}>
                    <View style={{ paddingHorizontal: 15 }}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#000000',
                            }}>
                            Skills:
                        </Text>
                    </View>
                    <View
                        style={{
                            height: HEIGHT / 8.7,
                            flexDirection: 'row',
                            marginTop: 35,
                            // paddingBottom: 10,
                            // backgroundColor: 'green',
                        }}>
                        <FlatList
                            data={data}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            contentContainerStyle={{
                                // paddingVertical: 5,
                                // padding: 10,
                                paddingLeft: 15,
                            }}
                            ItemSeparatorComponent={<View style={{}} />}
                            renderItem={({ item, index }) => (
                                <CardBox
                                    name={item.name}
                                    backgroundColor={item.backgroundColor}
                                    textcolor={item.textcolor}
                                />
                            )}
                        />
                    </View>
                    <View style={{}}>
                        <Text
                            style={{
                                flex: 1,
                                fontFamily: Fonts.default,
                                fontWeight: '600',
                                fontSize: 18,
                                color: Colors.tertiary,
                                paddingLeft: 15,
                            }}>
                            Description:
                        </Text>
                        <Text
                            style={{
                                // textAlign: 'center',
                                fontFamily: Fonts.default,
                                fontWeight: '600',
                                fontSize: 14,
                                color: Colors.tertiary,
                                opacity: 0.43,
                                paddingHorizontal: 15,
                                padding: 5,
                                // paddingLeft: 15,
                                // paddingTop: 15,
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod.Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod.
                        </Text>
                    </View>
                    <Text
                        style={{
                            // textAlign: 'center',
                            marginTop: 'auto',
                            fontFamily: Fonts.default,
                            fontWeight: '600',
                            fontSize: 18,
                            color: Colors.tertiary,
                            paddingLeft: 15,
                            // marginVertical: 15,
                            // paddingTop: 5,
                        }}>
                        Schedule:
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            // paddingTop: 10,
                            paddingLeft: 15,
                        }}>
                        <Text
                            style={{
                                // textAlign: 'center',
                                fontFamily: Fonts.default,
                                fontWeight: '600',
                                fontSize: 18,
                                color: Colors.tertiary,
                                alignSelf: 'flex-start',
                            }}>
                            August 2023
                        </Text>
                        <TouchableRipple
                            style={{
                                // paddingHorizontal: 10,
                                //   marginTop: 45,
                            }}>
                            <EditSvg />
                        </TouchableRipple>
                    </View>
                    <View
                        style={{
                            // height: HEIGHT / 6.2,
                            flexDirection: 'row',
                            alignSelf: 'center',
                            // paddingHorizontal: 5,
                        }}>
                        <ColorBox />
                    </View>
                    <View
                        style={{
                            // marginTop: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            // marginBottom: 10,
                        }}>
                        <ButtonComponent
                            icon1
                            borderRadius={14}
                            buttonText="Book Appointment"
                            buttonColor={Colors.primary}
                            textColor={Colors.secondary}
                            // onPress={() => navigation.goBack()}
                            height={WIDTH <= 375 ? 55 : 55}
                            width={WIDTH <= 323 ? 260 : 300}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Shope;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
        backgroundColor: 'yellow'
    },
    text: {
        fontFamily: Fonts.default,
        fontWeight: '600',
        fontSize: 18,
        color: Colors.tertiary,
        letterSpacing: 0.9,
    },
    image: {
        width: '100%',
        height: 224,
    },
    texline: {
        // width: '100%',
        paddingLeft: 5,
        marginBottom: 2,
        flexDirection: 'row',
        // alignSelf: 'center',
        // justifyContent: 'space-between',
    },
    btn: {
        height: 50,
        width: 50,
        borderRadius: 10,
        // marginLeft: 20,
        // marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
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
var data = [
    {
        name: 'Homework Assistance',
        backgroundColor: '#FADDBA',
        textcolor: '#F2AC57',
    },
    {
        name: 'Social Interaction',
        backgroundColor: '#C7EEF8',
        textcolor: '#00B4D8',
    },
    {
        name: 'Skill Development',
        backgroundColor: '#E7C6C6',
        textcolor: '#E9A6A6',
    },
];
