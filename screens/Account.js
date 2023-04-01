
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import { Colors } from '../assets/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, FAB } from 'react-native-paper';
import { Fonts } from '../assets/constants/Fonts';
import { Mesageicon, Notification, PolicyICon, Profile, TermsIcon } from '../assets/svgs/settingSvgs';
import Assets from '../assets';
import ButtonComponent from '../components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '../components/Input';

const Account = ({ navigation }) => {
    const [data, setData] = useState({
        FirstName: '',
        LAstName: '',
        contactNo: '',
        email: '',
        password: '',


    })
    data1 = [
        {
            text2: 'First name',
            textitem: 'David',
            icon: <Profile />,
            icon1: '../assets/svgs/',
            IconColor: '#000',
            onPress: () => navigation.navigate('Account')
        },
        {
            text2: 'Last Name',
            textitem: 'Michael',
            textitem2: 'Allow',
            icon: <Notification />,
            icon1: 'chevron-right',
            IconColor: '#000',
            onPress: () => navigation.navigate('Notification')
        },
        {
            text2: 'Email',
            textitem: 'david@gmail.com',
            icon: <PolicyICon />,
            icon1: 'chevron-right',
            IconColor: '#ffff',
            onPress: () => navigation.navigate('TermsConditionScreen', {
                hedtext: "Privacy Policy"
            })

        },
        {
            text2: 'Phone',
            textitem: '(211)319-8396',
            icon: <TermsIcon />,
            icon1: 'chevron-right',
            IconColor: '#ffff',
            onPress: () => navigation.navigate('TermsConditionScreen', {
                hedtext: "Terms of Use"
            })
        },
        {
            text2: 'Password',
            textitem: 'Password',
            icon: <Mesageicon />,
            icon1: 'chevron-right',
            IconColor: '#ffff',
            onPress: () => navigation.navigate('')

        }
    ]
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ paddingHorizontal: 15 }}>
                    <HeaderComponent navigation={navigation} />
                </View>
                <View style={{

                    backgroundColor: '#ffff',
                    flex: 1,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    paddingHorizontal: 15,
                    marginTop: 45
                }}>
                    <View
                        style={{

                            height: WIDTH < 390 && WIDTH >= 375 ? 90 : WIDTH < 375 ? 90 : 100,
                            position: 'absolute',
                            top: WIDTH < 390 && WIDTH >= 375 ? -5 : WIDTH < 375 ? -10 : -50,
                            right:
                                WIDTH < 390 && WIDTH >= 375 ? -170 : WIDTH < 375 ? -10 : 150,
                            zIndex: 10,
                        }}>
                        <Avatar.Image
                            size={90}
                            style={{

                            }}
                            source={Assets.logos.avatarPlaceholder}
                        />
                    </View>
                    <KeyboardAwareScrollView
                        keyboardShouldPersistTaps="handled"
                        enableOnAndroid={true}
                        enableAutomaticScroll={true}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}>

                        <View style={styles.contentContainer}>
                            <View style={{ marginVertical: 15, paddingTop: 25 }} />
                            <Text style={[styles.headertex, {
                                marginLeft: 5, fontSize: 16,
                                paddingVertical: 10,
                                textAlign: 'left'
                            }]}>First name</Text>
                            <Input
                                iconname="calendar"
                                placeholder="David"
                                text={data.FirstName}
                                setText={setData}
                                formKey="First Name"
                                textColor={Colors.tertiary}
                                backgroundColor={Colors.bgColors.grey}
                            />

                            <View style={{ marginVertical: 15 }} />
                            <Text style={[styles.headertex, {
                                marginLeft: 5, fontSize: 16,
                                paddingVertical: 10,
                                textAlign: 'left'
                            }]}>Last name</Text>
                            <Input
                                placeholder="Michael"
                                text={data.LAstName}
                                setText={setData}
                                formKey="Last Name"
                                textColor={Colors.tertiary}
                                backgroundColor={Colors.bgColors.grey}
                            />
                            <Text style={[styles.headertex, {
                                marginLeft: 5, fontSize: 16,
                                paddingVertical: 10,
                                textAlign: 'left'
                            }]}>Email</Text>
                            <Input

                                placeholder="  david@gmail.com"
                                text={data.LAstName}
                                setText={setData}
                                formKey="Email"
                                textColor={Colors.tertiary}
                                backgroundColor={Colors.bgColors.grey}
                            />
                            <View style={{ marginVertical: 15 }} />
                            <Text style={[styles.headertex, {
                                marginLeft: 5, fontSize: 16,
                                paddingVertical: 10,
                                textAlign: 'left'
                            }]}>Phone</Text>
                            <Input
                                placeholder="(21)3198396"
                                text={data.contactNo}
                                setText={setData}
                                formKey="Phone"
                                textColor={Colors.tertiary}
                                backgroundColor={Colors.bgColors.grey}
                            />

                            <View style={{ marginVertical: 15 }} />
                            <Text style={[styles.headertex, {
                                marginLeft: 5, fontSize: 16,
                                paddingVertical: 10,
                                textAlign: 'left'
                            }]}>Password</Text>
                            <Input
                                placeholder="**************"
                                text={data.password}
                                setText={setData}
                                formKey="password"
                                textColor={Colors.tertiary}
                                backgroundColor={Colors.bgColors.grey}
                            />

                            <View
                                style={{
                                    paddingVertical: 25,
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                }}>
                                <ButtonComponent
                                    btnfonSize={16}
                                    borderRadius={10}
                                    buttonText="Login"
                                    buttonColor={Colors.primary}
                                    textColor={Colors.secondary}
                                    onPress={() => navigation.navigate('Drawer')}
                                    height={WIDTH <= 375 ? 40 : 55}
                                    width={WIDTH <= 375 ? 125 : 375}
                                />

                            </View>
                        </View>
                    </KeyboardAwareScrollView>


                </View>

            </ScrollView>
        </SafeAreaView >
    )
}

export default Account;
const HeaderComponent = ({ navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <FAB
                style={[
                    styles.btn,
                    {
                        height: WIDTH < 375 ? 40 : 55,
                        width: WIDTH < 375 ? 40 : 55,
                    },
                ]}
                size="small"
                icon="chevron-left"
                color={Colors.tertiary}
                onPress={() => navigation.goBack()}
            />
            <Text style={[styles.headertex, { color: Colors.secondary, }]}>My Profile</Text>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        // paddingHorizontal: 25,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 25,
    },
    btn: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'green',
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
    headertex: {
        marginLeft: 5,
        fontSize: 22,
        color: Colors.tertiary,
        fontFamily: Fonts.default,
        fontWeight: '600',
        fontSize: 22,
        color: Colors.tertiary,
        textAlign: 'center',
        // letterSpacing: 0.9,
    },
    content: {
        paddingHorizontal: 10,
        marginVertical: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.bgColors.grey,
        shadowColor: Colors.bgColors.grey,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

