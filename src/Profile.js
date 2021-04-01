import React, { Component, Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert,
    SafeAreaView,
    AsyncStorage
} from 'react-native';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import {
    Avatar,
    Title,
    Caption,
} from 'react-native-paper'
import logo from '../Image/logo.png'

import MIcon from 'react-native-vector-icons/MaterialIcons';
import Support from './supportList';
import { addSyntheticLeadingComment } from 'typescript';

const { width: WIDTH } = Dimensions.get('window')

export default class loglogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataini: [],
            text: ''
        }
    }
    logout = () => {
        this.props.navigation.dispatch(resetAction);
        alert('berhasil logout')
    }

    componentDidMount() {
        this.getData()
    }
    getData() {
        AsyncStorage.getItem('token', (err, access_token) => {
            axios.get('http://192.168.43.117:8000/api/profile', {
                headers: {
                    Authorization: 'Bearer ' + access_token
                }
            })
                .then((res) => {
                    const dataini = res.data;
                    console.log('res get data: ', res.data);
                    this.setState({ dataini: res.data.data });
                });
        })
    }

    render() {

        return (
            <>
                <SafeAreaView style={styles.container}>

                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={require('../Image/user.png')}
                                size={80}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Title style={[styles.title, {
                                    marginTop: 15,
                                    marginBottom: 5,
                                }]}>
                                    {this.state.dataini.sie_rohani}
                                </Title>
                                <Caption style={styles.caption}>
                                    {this.state.dataini.nis}
                                </Caption>
                            </View>
                        </View>
                    </View>


                    <ScrollView>
                        <Support
                            icon={<Icon name="podium-outline" color="#136DF3" size={25} style={{ position: 'absolute', top: 8, left: 37, }} />}
                            title="Kelas"
                            subtitle={this.state.dataini.class}
                        />
                        <Support
                            icon={<Icon name="ios-mail-outline" color="#136DF3" size={25} style={{ position: 'absolute', top: 8, left: 37, }} />}
                            title="Email"
                            subtitle={this.state.dataini.contact}
                        />
                        <TouchableOpacity onPress={() => Alert.alert('PERINGATAN',
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
                            <Support
                                icon={<MIcon name={'logout'} color="#136DF3" size={25} style={{ position: 'absolute', top: 8, left: 37, }} />}
                                title="Logout"

                            />


                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>


            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '20%'
    },
    cardlist: {
        borderBottomWidth: 1,

        borderBottomColor: '#136DF3',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        marginTop: '3.5%'
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
        position: 'relative',
        flexDirection: 'column'
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,

    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
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
        fontSize: 15,
        alignItems: 'center'
    },
});


// const styles = StyleSheet.create({
//     backgroundContainer: {
//         flex: 1,
//         width: null,
//         height: null,
//         backgroundColor: '#136DF3'
//     },
//     logoContainer: {
//         alignItems: 'center',
//         marginTop: 50,
//         marginBottom: 30
//     },
//     logo: {
//         width: 135,
//         height: 120
//     },
//     logoText: {
//         color: 'rgb(92,78,176)',
//         fontSize: 50,
//         fontWeight: 'bold',
//         marginBottom: 40,
//         alignSelf: 'center'
//     },
//     inputContainer: {
//         marginTop: 10
//     },
//     input: {
//         width: WIDTH - 90,
//         height: 45,
//         borderRadius: 25,
//         fontSize: 16,
//         paddingLeft: 45,

//         borderColor: 'rgb(92,78,176)',
//         color: 'rgb(92,78,176)',

//         marginHorizontal: 25
//     },
//     profileIcon: {
//         position: 'absolute',
//         top: 8,
//         left: 37,

//     },
//     footer1: {
//         flex: 1,
//         marginTop: 100,
//         backgroundColor: '#fff',
//         borderTopRightRadius: 60,
//         borderTopLeftRadius: 60,
//     },
//     profileImage: {
//         alignItems: 'center',

//         top: -55
//     },
//     image: {
//         width: 110,
//         height: 110,
//         position: 'relative'
//     },
//     username: {
//         top: 5,
//         fontSize: 30,
//         fontWeight: 'bold',

//     },
//     text: {
//         color: 'rgba(255, 255, 255, 0.7)',
//         fontSize: 16,
//         textAlign: 'center'
//     },
//     btnContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     sosial: {
//         position: 'absolute',
//         top: 4,
//         left: 5
//     },
//     MainContainer: {
//         top: 18,
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         left: 7
//     },
//     forgotContainer: {
//         top: 18,
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         left: 42,
//         marginBottom: 10
//     },

//     forgotStyle: {
//         color: 'rgb(92,78,176)',
//         fontWeight: 'bold',
//         fontSize: 15,
//         left: 42,
//         marginBottom: 20,

//     },
//     clikStyle: {
//         color: 'rgb(92,78,176)',
//         fontWeight: 'bold',
//         fontSize: 15,
//         marginBottom: 20,
//     },
//     profileText: {
//         color: "black",
//         fontWeight: "bold",
//         paddingLeft: 10,
//         fontSize: 20
//     },
//     profileSubText: {
//         color: 'rgb(92,78,176)',
//         paddingLeft: 10,
//         fontSize: 15,
//         alignItems: 'center'
//     },

// });
// const resetAction = StackActions.reset({
//     index: 0,
//     actions: [NavigationActions.navigate({ routeName: 'F' })],
// });