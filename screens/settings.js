
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import { Colors } from '../assets/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { FAB } from 'react-native-paper';
import { Fonts } from '../assets/constants/Fonts';
import { FlatList } from 'react-native-gesture-handler';
import { Mesageicon, Notification, PolicyICon, Profile, TermsIcon } from '../assets/svgs/settingSvgs';
import Icon from 'react-native-vector-icons/Feather';

const Settings = ({ navigation, }) => {
    data = [
        {
            textitem: 'My Profile',
            icon: <Profile />,
            icon1: 'chevron-right',
            IconColor: '#000',
            // onPress: () => navigation.navigate('Account')
        },
        {
            textitem: 'Notification',
            textitem2: 'Allow',
            icon: <Notification />,
            icon1: 'chevron-right',
            IconColor: '#000',
            onPress: () => navigation.navigate('TermsConditionScreen')
        },
        {
            textitem: 'Privacy Policy',
            icon: <PolicyICon />,
            icon1: 'chevron-right',
            IconColor: '#ffff',
            onPress: () => navigation.navigate('Account', {
                hedtext: "Privacy Policy"
            })

        },
        {
            textitem: 'Terms of Use',
            icon: <TermsIcon />,
            icon1: 'chevron-right',
            IconColor: '#ffff',
            onPress: () => navigation.navigate('Account', {
                hedtext: "Terms of Use"
            })
        },
        {
            textitem: 'Recommende a friend',
            icon: <Mesageicon />,
            icon1: 'chevron-right',
            IconColor: '#ffff',
            onPress: () => navigation.navigate('TermsConditionScreen')

        }


    ]
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ paddingHorizontal: 15 }}>
                    <HeaderComponent navigation={navigation} />
                </View>
                <View
                    style={{
                        // height: HEIGHT / 3.7,
                        flexDirection: 'row',
                        marginTop: 45,
                        paddingHorizontal: 15,
                    }}>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <TouchableOpacity onPress={item.onPress} style={styles.content}>
                                        <View style={{ flexDirection: 'row' }}>
                                            {item.icon}
                                            <Text style={[styles.headertex, {
                                                textAlign: 'left', fontSize: 16,
                                                paddingTop: 4,
                                            }]}>{item.textitem}</Text></View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={[styles.headertex, {
                                                textAlign: 'left', fontSize: 16,
                                            }]}>{item.textitem2}</Text>

                                            <Icon
                                                name={item.icon1}
                                                size={20}
                                                color={item.IconColor}
                                            />
                                        </View>
                                    </TouchableOpacity>

                                </>
                            )
                        }}>
                    </FlatList >
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Settings;
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
                color={Colors.secondary}
                onPress={() => navigation.goBack()}
            />
            <Text style={styles.headertex}>Settings</Text>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
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
        backgroundColor: Colors.primary,
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
        paddingVertical: 25,
        marginVertical: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.bgColors.lightblue,
        shadowColor: Colors.tertiary,
        borderRaduis: 5, flexDirection: 'row',
        justifyContent: 'space-between'


    },
})