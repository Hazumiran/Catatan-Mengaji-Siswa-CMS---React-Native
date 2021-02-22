import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/Fontisto';
import BgImage from '../Image/bg1.jpg';
import Logo from '../Image/logo.png';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from 'react-native-paper';
const { width: WIDTH } = Dimensions.get('window')
export default class Registration extends Component {
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
            
            <ImageBackground style={styles.bgImageStyle}>
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logoStyle} />
                  
                   
                </View>
                <ScrollView style={{flex:1}}>



                <View style={styles.footer1}>
                <Text style={styles.textLogoStyle}>Sign Up</Text>
                <View style={styles.inputContainer}>
                    <Iconss name={'email'}
                        size={20}
                        color={'rgba(255, 255, 255, 0.7)'}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Email Address'}
                        placeholderTextColor={'rgb(92,78,176)'}
                        underlineColorAndroid='transparent'
                        keyboardType="email-address"
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
                        placeholderTextColor={'rgb(92,78,176)'}
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity style={styles.btnEye}
                        onPress={this.showPass.bind(this)}>
                        <Icon name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'} size={20} color={'rgb(92,78,176)'} />
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
                        placeholderTextColor={'rgb(92,78,176)'}
                        underlineColorAndroid='transparent'
                        keyboardType="default"
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
                        placeholderTextColor={'rgb(92,78,176)'}
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
                        placeholderTextColor={'rgb(92,78,176)'}
                        underlineColorAndroid='transparent'
                        keyboardType="phone-pad"
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
                        placeholderTextColor={'rgb(92,78,176)'}
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
                <View style={styles.MainContainer}>
                    <Text style={styles.signInStyle}>
                        Have any account?
                     </Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.signStyle}>
                            &nbsp; Sign In here
                     </Text>
                    </TouchableOpacity>

                </View>
</View>
</ScrollView>

            </ImageBackground>
            
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    bgImageStyle: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(92,78,176)'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20
    },
    logoStyle: {
        width: 135,
        height: 120
    },
    textLogoStyle: {
        
        color: 'rgb(92,78,176)',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 35,
        alignSelf: 'center'
    },
    btnEye: {
        position: 'absolute',
        top: 10,
        right: 42
    },

    btnSignup: {
        width: WIDTH - 90,
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
        marginRight: 50
        
    },

    signinIcon: {
        position: 'absolute',
        top: 7,
        left: 15,
    },

    orText: {
        alignItems: 'center',
    },

    inputContainer: {
        marginTop: 10,
        left: -24
    },
    inputIcon: {
        position: 'absolute',
        top: 11,
        color: 'rgb(92,78,176)',
        paddingLeft: 45,
    },
    input: {
        width: WIDTH - 90,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        borderWidth: 1,
        borderColor: 'rgb(92,78,176)',
        color: 'rgb(92,78,176)',
        marginHorizontal: 25
        

    },
    MainContainer: {
        top: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        left: 7
    },
    signInStyle: {
        color: 'rgb(92,78,176)',
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'bold',
        left: 50
    },
    signStyle: {
        color: 'rgb(92,78,176)',
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'bold',
        right: 110
    },
     footer1: {
        flex: 3,
        backgroundColor: 'white',
        borderTopStartRadius: 90,

        paddingVertical: 50,
        paddingHorizontal: 50,}
        
})





// import React, { Component } from 'react';
// import { AppRegistry, Text } from 'react-native';
// export default class Registration extends Component {
//     render() {
//         return (
//             <Text>Hello world!</Text>
//         );
//     }
// }