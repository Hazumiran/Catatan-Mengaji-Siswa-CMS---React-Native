import React, { Component, Fragment } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Alert,
    SafeAreaView,
    AsyncStorage,
    Text,
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
} from 'react-native-paper'
import APIkit from './APIKit';

import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Support from './supportList';


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
            APIkit.get('/profile', {
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
                <ImageBackground style={styles.containerStyle} source={require('../assets/backgrounds/bg1.jpg')}>
                    <View style={styles.container}>
                        <TouchableOpacity style={{ margin: 20 }} onPress={() => this.props.navigation.navigate('TabNav')} >
                            <Icon name="arrow-back" size={30} color={'#fff'} />
                        </TouchableOpacity>

                        <View style={styles.wrapper}>
                            <View style={styles.userInfoSection}>
                                <FAIcon
                                    name="user-circle"
                                    size={100}
                                    style={{ left: 10, marginTop: -55, backgroundColor: '#fff', justifyContent: 'flex-start', width: 100, borderRadius: 100 }}
                                />
                                <View style={{ marginLeft: 20 }}>
                                    <Title style={[styles.title, {
                                        marginTop: 15,
                                        marginBottom: 5,
                                    }]}>
                                        {this.state.dataini.sie_rohani}
                                    </Title>
                                    <Caption style={styles.caption}>
                                        NIS: {this.state.dataini.nis}
                                    </Caption>
                                </View>
                            </View>


                            <View>
                                <View style={{ marginTop: 10, paddingHorizontal: 15, height: 60, flexDirection: 'row', backgroundColor: 'white' }}>
                                    <View style={{ padding: 5, alignItems: 'center', justifyContent: 'center' }}>
                                        <Icon name="podium-outline" color="#136DF3" size={25} style={{ paddingLeft: '5%' }} />
                                    </View>
                                    <View style={{ margin: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 20, letterSpacing: -0.5 }}>
                                            Kelas
                                    </Text>
                                        <Text style={{ fontSize: 15, color: '#1E90FF' }}>
                                            {this.state.dataini.class}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#616161', height: 1, width: '100%', }} />

                                {/*DIVIDER*/}

                                <View style={{ marginTop: 10, paddingHorizontal: 15, height: 60, flexDirection: 'row', backgroundColor: 'white' }}>
                                    <View style={{ padding: 5, alignItems: 'center', justifyContent: 'center' }}>
                                        <Icon name="ios-mail-outline" color="#136DF3" size={25} style={{ paddingLeft: '5%' }} />
                                    </View>
                                    <View style={{ margin: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 20, letterSpacing: -0.5 }}>
                                            Email
                                    </Text>
                                        <Text style={{ fontSize: 15, color: '#1E90FF' }}>
                                            {this.state.dataini.contact}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#616161', height: 1, width: '100%', }} />

                                {/*DIVIDER*/}
                                <TouchableHighlight onPress={() => Alert.alert('PERINGATAN',
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
                                    <View style={{ paddingHorizontal: 15, height: 60, flexDirection: 'row', backgroundColor: 'white' }}>
                                        <View style={{ padding: 5, alignItems: 'center', justifyContent: 'center' }}>
                                            <MIcon name={'logout'} color="#136DF3" size={25} style={{ paddingLeft: '5%' }} />
                                        </View>
                                        <View style={{ margin: 10, justifyContent: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 20, letterSpacing: -0.5 }}>
                                                Logout
                                    </Text>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                                <View style={{ backgroundColor: '#616161', height: 1, width: '100%', }} />

                            </View>

                        </View>
                    </View>
                </ImageBackground>

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    containerStyle: {
        flex: 1,

        justifyContent: 'center',

    },
    wrapper: {
        flex: 1,
        marginTop: 110,
        backgroundColor: '#fff',
        borderTopRightRadius: 60,

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
        paddingHorizontal: 20,
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

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'F' })],
});