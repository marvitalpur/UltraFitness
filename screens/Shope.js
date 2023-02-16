import React from 'react';
import Lottie from 'lottie-react-native';
import {
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { Colors } from '../assets/constants/Colors';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import Assets from '../assets';
import { Avatar, TouchableRipple } from 'react-native-paper';
import { Fonts } from '../assets/constants/Fonts';
import ButtonComponent from '../components/Button';
import { EditSvg, NotificationSvg } from '../assets/svgs/HeaderSvgs';
import CourseCard from '../components/CourseCard';
import WorkOutCard from '../components/WorkOutCard';
const Shope = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        source={Assets.backgroundImages.headerBackground1}
                        resizeMode="cover"
                        style={styles.image}>
                        <View style={{ flex: 1, paddingHorizontal: 15 }}>
                            <Header navigation={navigation} />
                            <View style={{ marginTop: 65 }}>
                                <View
                                    style={{
                                        marginTop: 40,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <View
                                        style={{
                                            width: 200,
                                            marginBottom: 2,
                                            flexDirection: 'row',
                                        }}>
                                        <TouchableOpacity
                                            onPress={() => props.navigation.navigate('Profile')}
                                            style={{
                                                width: 100,
                                                height: 100,
                                                borderWidth: 2,
                                                borderColor: Colors.primary,
                                                borderRadius: 100,
                                            }}>
                                            <Avatar.Image
                                                size={90}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: 100,
                                                    backgroundColor: 'transparent',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                                source={Assets.logos.avatarPlaceholder}
                                            />
                                        </TouchableOpacity>

                                        <View
                                            style={{
                                                paddingHorizontal: 10,
                                                justifyContent: 'space-between',
                                                marginTop: 40,
                                                //   width: 100,
                                                marginBottom: 25,
                                                //   flexDirection: 'row',
                                            }}>
                                            <Text
                                                style={{
                                                    textAlign: 'center',
                                                    fontFamily: Fonts.default,
                                                    fontWeight: '600',
                                                    fontSize: 18,
                                                    color: Colors.tertiary,
                                                }}>
                                                Alen Matias
                                            </Text>
                                            <Text
                                                style={{
                                                    textAlign: 'center',
                                                    fontFamily: Fonts.default,
                                                    fontWeight: '600',
                                                    fontSize: 14,
                                                    color: Colors.tertiary,
                                                    //   marginTop: 5,
                                                    opacity: 0.43,
                                                }}>
                                                @Alenmatias
                                            </Text>
                                        </View>
                                    </View>
                                    <TouchableRipple
                                        style={{
                                            paddingHorizontal: 10,
                                            marginTop: 45,
                                        }}>
                                        <EditSvg />
                                    </TouchableRipple>
                                </View>

                            </View>
                        </View>
                    </ImageBackground>

                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        {/* Cards start */}
                        <View
                            style={{
                                height: HEIGHT / 6.7,
                                flexDirection: 'row',
                                marginTop: 70,
                                // width: '90%',
                                alignSelf: 'center',
                            }}>
                            <CourseCard
                                CourseName="Complete Course"
                                courseNumber="25"
                                totalCourse="Total Session in roll"
                                totalNumber="25"
                            />
                        </View>
                        <View style={{
                            height: HEIGHT / 3.7,
                            flexDirection: 'row',
                            marginTop: 10,
                            // width: '90%',
                            alignSelf: 'center',
                        }}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                contentContainerStyle={{
                                    flexGrow: 1,
                                    paddingLeft: 5,
                                    paddingRight: 8,
                                }}
                                ItemSeparatorComponent={<View style={{ margin: 5 }} />}
                                data={data}
                                renderItem={({ item, index }) => (
                                    <WorkOutCard
                                        item={item}
                                        index={index}
                                        WorkoutImage={item.WorkoutImage}
                                        WorkoutName={item.WorkoutName}
                                        WorkoutTime={item.WorkoutTime}
                                    />
                                )}
                            />
                        </View>
                        <View
                            style={styles.texline}>
                            <Text
                                style={[styles.textstyle, { color: Colors.tertiary, }]}>
                                Activities
                            </Text>
                            <Text
                                style={[styles.textstyle, { color: Colors.primary, }]}>
                                Weekely
                            </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};
export default Shope;
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
    image: {
        width: '100%',
        height: 224,
    },
    texline: {
        width: '100%',
        paddingLeft: 5,
        marginBottom: 2,
        flexDirection: 'row',
        alignSelf: 'center', justifyContent: 'space-between'
    },

});
const data = [
    {
        id: 1,
        WorkoutName: 'Workout',
        WorkoutTime: '02 Hours',
        WorkoutImage: require('../assets/images/dumbbell.png'),
    },
    {
        id: 2,
        WorkoutName: 'Workout',
        WorkoutTime: '02 Hours',
        WorkoutImage: require('../assets/images/running.png'),
    },
    {
        id: 3,
        WorkoutName: 'Workout',
        WorkoutTime: '02 Hours',
        WorkoutImage: require('../assets/images/Imap-food.png'),
    },

];
