import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    ImageBackground,
    LogBox,
    Animated,
    AsyncStorage
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';
import { validationHelper } from './validation/ValidationHelper';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/F-style'
import APIKit, { setClientToken } from './APIKit';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
// import AsyncStorage from '@react-native-community/async-storage';


const initialState = {
    username: '',
    password: '',
    errors: {},
    isAuthorized: false,
    isLoading: false,
    hidePassword: true,
};

export default class F extends Component {
    constructor(props) {
        super(props);
        this.anim = {
            LogoText: new Animated.Value(0),
            LogoAnime: new Animated.Value(0),
            loadingSpinner: false,
            username: '',
            passwordLogin: '',
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
        }
        this.onInputChange = validationHelper.onInputChange.bind(this);
        this.isValidate = validationHelper.isValidate.bind(this);
        this.onSubmit = this.onPressLogin.bind(this);
    }
    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        LogBox.ignoreLogs(['Picker']);
        const { LogoText, LogoAnime } = this.anim;
        Animated.parallel([
            Animated.spring(LogoAnime, {
                toValue: 1,
                tension: 10,
                friction: 20,
                duration: 40000,
            }).start(),

            Animated.timing(LogoText, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }),
        ]).start(() => {
            this.setState({
                loadingSpinner: true,
            });
        });
    }
    state = initialState;



    onUsernameChange = username => {
        this.setState({ username });
    };

    onPasswordChange = password => {
        this.setState({ password });
    };

    onPressLogin() {
        const { username, password } = this.state;
        const payload = { username, password };
        console.log(payload);

        const onFailure = error => {
            console.log(error && error.response);
            this.setState({ errors: error.response.data, isLoading: false });
        };

        // Show spinner when call is made
        this.setState({ isLoading: true });

        APIKit.post('/login', payload)
            .then(res => {
                AsyncStorage.setItem('token', res.data.access_token);
                this.props.navigation.dispatch(resetAction);
                console.log('res', res.data)

            })

            .catch(onFailure);
    }

    getNonFieldErrorMessage() {
        // Return errors that are served in `non_field_errors`
        let message = null;
        const { errors } = this.state;
        if (errors.non_field_errors) {
            message = (
                <View style={styles.errorMessageContainerStyle}>
                    {errors.non_field_errors.map(item => (
                        <Text style={styles.errorMessageTextStyle} key={item}>
                            {item}
                        </Text>
                    ))}
                </View>
            );
        }
        return message;
    }

    getErrorMessageByField(field) {
        // Checks for error message in specified field
        // Shows error message from backend
        let message = null;
        if (this.state.errors[field]) {
            message = (
                <View style={styles.errorMessageContainerStyle}>
                    {this.state.errors[field].map(item => (
                        <Text style={styles.errorMessageTextStyle} key={item}>
                            {item}
                        </Text>
                    ))}
                </View>
            );
        }
        return message;
    }

    showPass = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    render() {
        const { isLoading } = this.state;

        return (
            <ImageBackground
                style={styles.containerStyle}
                source={require('../assets/backgrounds/splash-bg-blur.jpg')}
            >
                <Spinner visible={isLoading} />

                {!this.state.isAuthorized ? <Animated.View style={{
                    opacity: this.anim.LogoAnime,
                    top: this.anim.LogoAnime.interpolate({
                        inputRange: [0, 1],
                        outputRange: [800, 0],
                    }),

                }}>
                    <View style={styles.logotypeContainer}>
                        <Image
                            source={require('../assets/icons/praying.png')}
                            style={styles.logoStyle}
                        />
                    </View>
                    <View>
                        <Icon name={'ios-person-outline'} size={28} color={'white'} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            value={this.state.username}
                            maxLength={256}
                            placeholder="Username"
                            autoCapitalize="none"
                            placeholderTextColor="#ffffff"
                            color="white"
                            autoCorrect={false}
                            returnKeyType="next"
                            onSubmitEditing={event =>
                                this.passwordInput.wrappedInstance.focus()
                            }
                            onChangeText={this.onUsernameChange}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#fff"
                        />

                        {this.getErrorMessageByField('username')}
                        <View style={{
                            backgroundColor: '#fff',
                            height: 1,
                            width: 250,
                            alignSelf: 'center',
                            top: -20
                        }} />
                    </View>
                    <View>
                        <Icon name={'ios-lock-closed-outline'} size={28} color={'white'} style={styles.inputIcon} />
                        <TextInput
                            ref={node => {
                                this.passwordInput = node;
                            }}
                            style={styles.input}
                            value={this.state.password}
                            maxLength={40}
                            placeholder="Password"
                            onChangeText={this.onPasswordChange}
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="done"
                            blurOnSubmit={true}
                            onSubmitEditing={this.onPressLogin.bind(this)}
                            secureTextEntry={this.state.hidePassword}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#fff"

                        /><TouchableOpacity activeOpacity={0.8} style={styles.btnEye}
                            onPress={this.showPass}>

                            <Icon name={this.state.hidePassword == false ? 'ios-eye-outline' : 'ios-eye-off-outline'} size={26} color={'white'} />
                        </TouchableOpacity>
                        <View style={{
                            backgroundColor: '#fff',
                            height: 1,
                            width: 250,
                            alignSelf: 'center',
                            top: -20
                        }} />

                        {this.getErrorMessageByField('password')}

                        {this.getNonFieldErrorMessage()}
                    </View>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={this.onPressLogin.bind(this)}>
                        <Text style={styles.loginButtonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <View style={{ top: 10 }}>
                        <TouchableOpacity style={{
                            alignSelf: 'flex-end',
                            marginBottom: 20,

                        }}
                            onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                            <Text style={{ color: '#fff', right: 5, fontSize: 18, }}>
                                &nbsp; Lupa Password?
                     </Text>
                        </TouchableOpacity>


                    </View>
                </Animated.View> : <View><Text>Successfully authorized!</Text></View>}
            </ImageBackground>
        );
    }
}
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'TabNav' })],
});