
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

const Account = ({ navigation, route }) => {
    const { hedtext } = route.params
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ paddingHorizontal: 15 }}>
                    <HeaderComponent navigation={navigation} hedtext={hedtext} />
                </View>
                <View
                    style={{
                        // height: HEIGHT / 3.7,
                        // flexDirection: 'row',
                        marginTop: 45,
                        paddingHorizontal: 15,
                    }}>
                    <Text style={[styles.headertex, {
                        textAlign: 'left', fontSize: 16,
                        letterSpacing: 0.7
                    }]}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna.
                    </Text>
                    <Text style={[styles.headertex, {
                        textAlign: 'left', fontSize: 16,
                        letterSpacing: 0.7,
                        marginTop: 10
                    }]}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna.
                    </Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const HeaderComponent = ({ navigation, hedtext }) => {

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
            <Text style={styles.headertex}>{hedtext}</Text>

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

})

export default Account

