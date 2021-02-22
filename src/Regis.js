import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import bgImage from '../Image/bg1.jpg';
import logo from '../Image/logo.png';
import { Container, Header, Content, Footer, ListItem, Radio, Right, Left } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/Fontisto';
import FAIcon from 'react-native-vector-icons/FontAwesome';


const { width: WIDTH } = Dimensions.get('window')

export default class Regis extends Component {
    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground source={bgImage} style={styles.backgroundContainer} >
                        {/* <Header transparent /> */}
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo} source={logo} />
                            {/* <Text style={styles.logoText}>Tahfidz Asuh</Text> */}
                        </View>

                        <View style={styles.inputContainer}>
                            <Iconss name={'email'}
                                size={20}
                                color={'rgba(255, 255, 255, 0.7)'}
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={'Email Address'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon name={'ios-lock-closed-outline'}
                                size={20}
                                color={'rgba(255, 255, 255, 0.7)'}
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={'Password'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                            />
                            <TouchableOpacity style={styles.btnEye}
                                onPress={this.showPass.bind(this)}>
                                <Icon name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'} size={20} color={'rgba(255, 255, 255, 0.7)'} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon name={'md-person-outline'}
                                size={20}
                                color={'rgba(255, 255, 255, 0.7)'}
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={'Name'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon name={'home-outline'}
                                size={20}
                                color={'rgba(255, 255, 255, 0.7)'}
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={'Home Address'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon name={'ios-phone-portrait-outline'}
                                size={20}
                                color={'rgba(255, 255, 255, 0.7)'}
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={'Phone Number'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Icons name={'work-outline'}
                                size={20}
                                color={'rgba(255, 255, 255, 0.7)'}
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={'Institute Name'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                            />

                        </View>

                        <TouchableOpacity style={styles.btnSignup}>
                            <Text style={styles.textSignup}>Sign up</Text>
                        </TouchableOpacity>

                        <View style={styles.orText}>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: 10 }} >or</Text>
                        </View>

                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btnSignin}>
                                <FAIcon name={'google-plus-circle'}
                                    size={20}
                                    color={'rgba(255, 255, 255, 0.7)'}
                                    style={styles.signinIcon}
                                />
                                <Text style={styles.textSignup}>Google</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnSigninF}>
                                <MCIcon name={'facebook'}
                                    size={20}
                                    color={'rgba(255, 255, 255, 0.7)'}
                                    style={styles.signinIcon}
                                />
                                <Text style={styles.textSignup}>Facebook</Text>
                            </TouchableOpacity>
                        </View>

                        <Footer />
                    </ImageBackground>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoContainer: {
        alignItems: 'center',
        marginTop: '15',
        marginBottom: '15'
    },

    logo: {
        width: 240,
        height: 60,
    },

    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "500",
        marginTop: 10,
        opacity: 0.5,
    },

    inputContainer: {
        marginTop: 10
    },

    input: {
        width: WIDTH - 125,
        height: 40,
        borderRadius: 20,
        fontSize: 14,
        paddingLeft: 45,
        paddingRight: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
    },

    inputIcon: {
        position: 'absolute',
        top: 7,
        left: 15,
    },

    btnEye: {
        position: 'absolute',
        top: 7,
        right: 20
    },

    btnSignup: {
        width: WIDTH - 125,
        height: 38,
        borderRadius: 20,
        backgroundColor: '#004e82',
        justifyContent: 'center',
        marginTop: 20,
    },

    textSignup: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center'
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    btnSignin: {
        width: WIDTH - 275,
        height: 38,
        borderRadius: 20,
        backgroundColor: '#17386b',
        justifyContent: 'center',
        marginTop: 10
    },

    btnSigninF: {
        width: WIDTH - 275,
        height: 38,
        borderRadius: 20,
        backgroundColor: '#17386b',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
    },

    signinIcon: {
        position: 'absolute',
        top: 7,
        left: 15,
    },

    orText: {
        alignItems: 'center',
    }
});