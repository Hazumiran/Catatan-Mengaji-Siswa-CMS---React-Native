import React, { Component, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    Linking,
    TouchableOpacity, TouchableOpacityBase,
    BackHandler
} from 'react-native';
import { Divider } from 'react-native-paper';
import bgImage from '../Image/bg1.jpg';
import logo from '../Image/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import Mc from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconse from 'react-native-vector-icons/FontAwesome';
import styles from './styles/Login';
import { validationHelper } from './validation/ValidationHelper';

import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';


const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component {



    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false,
            inputs: {
                general: {
                    type: 'general',
                    value: ''
                },
                passwordLogin: {
                    type: 'passwordLogin',
                    value: ''
                }
            }
        };
        this.onInputChange = validationHelper.onInputChange.bind(this);
        this.isValidate = validationHelper.isValidate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    // postData(){
    //     axios.post('http://192.168.43.246:8000/auth/login').then(res=>{
    //         console.log(res.data)
    //         this.setState({dataini:res.data.data})
    //     })
    //   }
    // disableBackButton = () => {
    //     BackHandler.exitApp();
    //     return true;
    // }

    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.disableBackButton);
    // }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.disableBackButton);
    // }
    // handleBackPress = () => {

    //     return true;  // Do nothing when back button is pressed
    // }
    onSubmit() {
        console.log(this.state);
        const { general, passwordLogin } = this.state.inputs;
        this.isValidate();
        if ((general.value && passwordLogin.value) !== '') {
            this.props.navigation.dispatch(resetAction);
        }
        else {
            this.props.navigation.navigate('Login')
        }

    }

    onError(id) {
        const { inputs } = this.state;
        if (inputs[id].error) {
            return <Text style={styles.errorLabel}>{inputs[id].error}</Text>;

        }
        return null;

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

            <ImageBackground style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />

                    <View style={{ borderBottomWidth: 2, borderBottomColor: 'grey', height: 1, width: '85%', marginBottom: 5 }}></View>
                </View>


                <View style={styles.footer1}>
                    <Text style={styles.logoText}>Masuk</Text>
                    <View style={styles.inputContainer}>
                        <Icon name={'ios-person-outline'} size={28} color={'rgb(92,78,176)'} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder={'Nama Pengguna'}
                            placeholderTextColor={'rgb(92,78,176)'}
                            underlineColorAndroid='transparent'
                            onChangeText={value => this.onInputChange({ id: 'general', value })}
                        />
                        <View style={{ left: 10, color: 'red' }}>
                            {this.onError('general')}
                        </View>
                    </View>


                    <View style={styles.inputContainer}>
                        <Icon name={'ios-lock-closed-outline'} size={28} color={'rgb(92,78,176)'} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder={'Kata Sandi'}
                            secureTextEntry={this.state.showPass}
                            placeholderTextColor={'rgb(92,78,176)'}
                            underlineColorAndroid='transparent'
                            onChangeText={value => this.onInputChange({ id: 'passwordLogin', value })}
                        />
                        <View style={{ left: 10, color: 'red' }}>
                            {this.onError('passwordLogin')}
                        </View>

                        <TouchableOpacity style={styles.btnEye}
                            onPress={this.showPass.bind(this)}>

                            <Icon name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'} size={26} color={'rgb(92,78,176)'} />
                        </TouchableOpacity>


                    </View>


                    <TouchableOpacity style={styles.btnLogin} onPress={() => this.onSubmit()}>
                        <Text style={styles.text} >Masuk</Text>
                    </TouchableOpacity>

                    <View style={styles.forgotContainer}>
                        <Text style={styles.forgotStyle}>

                            Lupa Password ?
                     </Text>

                        <TouchableOpacity style={{
                            right: 115,

                            marginBottom: 20,
                        }}
                            onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                            <Text style={{ color: 'rgb(92,78,176)', fontWeight: 'bold', fontSize: 18, }}>
                                &nbsp; klik disini
                     </Text>
                        </TouchableOpacity>


                    </View>
                    <Divider style={{ height: 1, width: 240, alignSelf: 'center', backgroundColor: 'purple', marginBottom: '5%' }} />






                    <View style={styles.btnContainer}>

                        <TouchableOpacity style={styles.btngoogle}>
                            <Iconse name={'google-plus-circle'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.sosial} />
                            <Text style={styles.sosialText}>Google</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.btnfb}>
                            <Mc name={'facebook'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.sosial} />
                            <Text style={styles.sosialText}>Facebook</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </ImageBackground >


        )
    }

}
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'TabNav' })],
});
