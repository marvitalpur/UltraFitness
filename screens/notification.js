
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import { Colors } from '../assets/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { FAB } from 'react-native-paper';
import { Fonts } from '../assets/constants/Fonts';
import { FlatList } from 'react-native-gesture-handler';
import { Mesageicon, PolicyICon, Profile, TermsIcon } from '../assets/svgs/settingSvgs';
import { Switch } from 'react-native-paper';

const Notification = ({ navigation, }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


    data = [
        {
            index: 1,
            textitem: 'Block All Notifications',
            icon: <Profile />,
            icon1: 'chevron-right',
            IconColor: '#000',
            // onPress: () => navigation.navigate('Account')
        },
        {
            index: 2,
            textitem: 'Mute Messages Notification',
            icon: <Notification />,
            icon1: 'chevron-right',
            IconColor: '#000',

        },
        {
            index: 3,
            textitem: 'Hide Status Bar Notification',
            icon: <PolicyICon />,
            icon1: 'chevron-right',
            IconColor: '#ffff',

        },
        {
            index: 4,
            textitem: 'Hide Lock Screen Notifications',
            icon: <TermsIcon />,
            icon1: 'chevron-right',
            IconColor: '#ffff',

        },

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
                        // backgroundColor: 'yellow'
                    }}>
                    <FlatList

                        data={data}
                        ItemSeparatorComponent={<View style={{ marginVertical: 5 }} />}
                        renderItem={({ item, index }) => {

                            return (
                                <>
                                    <View style={styles.content}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={[styles.headertex, {
                                                textAlign: 'left', fontSize: 14,
                                                paddingTop: 4,
                                            }]}>{item.textitem}</Text></View>
                                        <View style={{ flexDirection: 'row', backgroundColor: Colors.secondary, }}>
                                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={Colors.primary} />
                                        </View>
                                    </View>
                                </>
                            )
                        }}>
                    </FlatList >
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

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
        borderBottomWidth: 0.25,
        borderColor: '#C2C2C2',
        shadowColor: Colors.tertiary,
        borderRaduis: 5, flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default Notification;