import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    Linking,
    ScrollView,
    TouchableOpacity, Alert
} from 'react-native';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import logo from '../Image/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons';

const { width: WIDTH } = Dimensions.get('window')
export default class loglogin extends Component {
    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false
        }
    }
    logout = () => {
        this.props.navigation.dispatch(resetAction);
        alert('berhasil logout')
    }
    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }
    getData = () => {
        AsyncStorage.getItem('token', (err, token) => {

            axios.get('http://192.168.1.7:8000/api/profile', {
                headers: {
                    Authorization: 'Bearer' + token
                },
            })
                .then(res => {
                    console.log('res get data: ', res);
                    setUsers(res.data.data);
                })
        })
    }

    render() {
        return (

            <ImageBackground style={styles.backgroundContainer}>
                <View style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    position: 'relative'
                }}><TouchableOpacity style={{ position: 'relative', top: '80%', left: '80%', }} onPress={() => Alert.alert('PERINGATAN',
                    'apakah anda yakin ingin logout ?', [
                    {
                        text: 'tidak',
                        onPress: () => console.log('button tidak')
                    },
                    {
                        text: 'Ya',
                        onPress: () => this.logout()
                    }
                ])}>
                        <MIcon name={'logout'}
                            size={35}
                            color={'white'}

                        /></TouchableOpacity>

                </View>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />

                    <View style={{ height: 1, width: '85%', marginBottom: 5 }}></View>
                </View>


                <View style={styles.footer1}>
                    <ScrollView>
                        <Text style={styles.logoText}>Profile</Text>

                        <View style={styles.inputContainer}>
                            <Icon name={'ios-person-outline'} size={28} color={'rgb(92,78,176)'} style={styles.profileIcon} />
                            <View style={styles.input}>
                                <Text style={styles.profileText}>
                                    Nama Pengguna
                            </Text>
                                <Text style={styles.profileSubText}>
                                    Muhammad Naufal
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgb(92,78,176)', height: 0.5, width: 300, alignSelf: 'center', top: 10, marginBottom: 10 }} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Icon name={'ios-mail-outline'} size={28} color={'rgb(92,78,176)'} style={styles.profileIcon} />
                            <View style={styles.input}>
                                <Text style={styles.profileText}>
                                    Email
                            </Text>
                                <Text style={styles.profileSubText}>
                                    person@example.com
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgb(92,78,176)', height: 0.5, width: 300, alignSelf: 'center', top: 10, marginBottom: 10 }} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Icon name={'ios-call-outline'} size={28} color={'rgb(92,78,176)'} style={styles.profileIcon} />
                            <View style={styles.input}>
                                <Text style={styles.profileText}>
                                    Kontak
                            </Text>
                                <Text style={styles.profileSubText}>
                                    082245******
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgb(92,78,176)', height: 0.5, width: 300, alignSelf: 'center', top: 10, marginBottom: 10 }} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Icon name={'ios-home-outline'} size={28} color={'rgb(92,78,176)'} style={styles.profileIcon} />
                            <View style={styles.input}>
                                <Text style={styles.profileText}>
                                    Alamat
                            </Text>
                                <Text style={styles.profileSubText}>
                                    Padalarang
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgb(92,78,176)', height: 0.5, width: 300, alignSelf: 'center', top: 10, marginBottom: 10 }} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Icon name={'ios-person-outline'} size={28} color={'rgb(92,78,176)'} style={styles.profileIcon} />
                            <View style={styles.input}>
                                <Text style={styles.profileText}>
                                    Jenis Kelamin
                            </Text>
                                <Text style={styles.profileSubText}>
                                    Laki Laki
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgb(92,78,176)', height: 0.5, width: 300, alignSelf: 'center', top: 10, marginBottom: 10 }} />
                        </View>

                        {/* <View style={styles.inputContainer}>
                            <Icon name={'logout'} size={28} color={'rgb(92,78,176)'} style={styles.profileIcon} />
                            <View style={styles.input}>
                                <Text style={styles.profileText}>
                                    LOGOUT
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgb(92,78,176)', height: 0.5, width: 300, alignSelf: 'center', top: 10, marginBottom: 10 }} />
                        </View> */}


                    </ScrollView>
                </View>

            </ImageBackground >


        )
    }
}


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: '#136DF3'
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30
    },
    logo: {
        width: 135,
        height: 120

    },
    logoText: {
        color: 'rgb(92,78,176)',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 40,
        alignSelf: 'center'
    },
    inputContainer: {
        marginTop: 10
    },
    input: {
        width: WIDTH - 90,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,

        borderColor: 'rgb(92,78,176)',
        color: 'rgb(92,78,176)',

        marginHorizontal: 25
    },
    profileIcon: {
        position: 'absolute',
        top: 8,
        left: 37,

    },
    footer1: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginLeft: 2

    },
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        textAlign: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sosial: {
        position: 'absolute',
        top: 4,
        left: 5
    },
    MainContainer: {
        top: 18,
        justifyContent: 'space-between',
        flexDirection: 'row',
        left: 7
    },
    forgotContainer: {
        top: 18,
        justifyContent: 'space-between',
        flexDirection: 'row',
        left: 42,
        marginBottom: 10
    },

    forgotStyle: {
        color: 'rgb(92,78,176)',
        fontWeight: 'bold',
        fontSize: 15,
        left: 42,
        marginBottom: 20,

    },
    clikStyle: {
        color: 'rgb(92,78,176)',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 20,
    },
    signUpStyle: {
        color: 'rgb(92,78,176)',
        fontWeight: 'bold',
        fontSize: 15,
        left: 50,

    },
    signStyle: {
        color: 'rgb(92,78,176)',
        fontWeight: 'bold',
        fontSize: 15,
        right: 70,

    },
    profileText: {
        color: "black",
        fontWeight: "bold",
        paddingLeft: 10,
        fontSize: 20
    },
    profileSubText: {
        color: 'rgb(92,78,176)',
        paddingLeft: 10,
        fontSize: 15
    },

});
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'F' })],
});