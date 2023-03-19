import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import ButtonComponent from '../components/Button'
import { WIDTH } from '../assets/constants/Dimensions'
import { Colors } from '../assets/constants/Colors'
import { Avatar } from 'react-native-paper'
import Assets from '../assets'


const InstructorDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, paddingHorizontal: 25 }}>
                    <Header headercompo1 navigation={navigation} headertex="Instructor Details" />
                    <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Avatar.Image
                                size={90}
                                style={{
                                    // width: '100%',
                                    // height: '100%',
                                    // borderRadius: 100,
                                    // backgroundColor: 'transparent',
                                    // justifyContent: 'center',
                                    // alignItems: 'center',
                                }}
                                source={Assets.logos.avatarPlaceholder}
                            />
                            <View style={{ paddingLeft: 10, marginTop: 25 }}>
                                <Text style={styles.text}>Kelvin Cole</Text>
                                <Text
                                    style={[
                                        styles.text,
                                        { letterSpacing: 0.6, fontSize: 12, fontWeight: '300' },
                                    ]}>
                                    @Kelvin
                                </Text>
                            </View>
                        </View>



                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                            <ButtonComponent
                                // icon1
                                borderRadius={14}
                                buttonText="Book Now"
                                buttonColor={Colors.secondary}
                                textColor={Colors.tertiary}
                                onPress={() => navigation.navigate('InstructorDetails')}
                                height={WIDTH <= 375 ? 55 : 55}
                                width={WIDTH <= 323 ? 55 : 100}
                            />

                        </View>


                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                        <Text>InstructorDetails</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default InstructorDetails

const styles = StyleSheet.create({})