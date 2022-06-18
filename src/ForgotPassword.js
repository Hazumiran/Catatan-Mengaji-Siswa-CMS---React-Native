import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground, Button, Linking
} from 'react-native';
import styles from './styles/ForgotPassword';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { validationHelper } from './validation/ValidationHelper';


export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                email: {
                    type: 'email',
                    value: ''
                }
            }
        };
        this.onInputChange = validationHelper.onInputChange.bind(this);
        this.isValidate = validationHelper.isValidate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit() {
        console.log(this.state);
        this.isValidate();
    }

    onError(id) {
        const { inputs } = this.state;
        if (inputs[id].error) {
            return <Text style={styles.errorLabel}>{inputs[id].error}</Text>;

        }
        return null;

    }
    render() {
        return (
            <ImageBackground
                style={styles.containerStyle}
                source={require('../assets/backgrounds/splash-bg-blur.jpg')}
            >
                <View style={styles.scrollViewWrapper}>
                    <View style={styles.scrollView}>
                        <View style={{
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            position: 'relative'
                        }}>

                        </View>
                        <View style={{ marginTop: '10%' }}>
                            <Text style={styles.forgotPasswordHeading}>
                                Lupa
                        </Text>
                            <Text style={styles.forgotPasswordHeading}>
                                Kata Sandi
                        </Text>
                        </View>
                        <View style={styles.footer}>
                            <View style={{
                                paddingTop: '5%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image style={{ width: 140, height: 140 }} source={require('../assets/icons/forgot.png')} />
                            </View>
                            {/* <Text style={styles.forgotPasswordSubheading}>
                                Masukkan Alamat Email Anda
                        </Text> */}

                            {/* <View >
                                <TextInput
                                    placeholder="Masukan Alamat Email"
                                    placeholderTextColor={'#9e9e9e'}
                                    style={styles.formInput}
                                    onChangeText={value => this.onInputChange({ id: 'email', value })}

                                />
                                <View style={{ left: 10 }}>
                                    {this.onError('email')}
                                </View>
                            </View> */}

                            <Text style={styles.infoText}>
                                Kirim email kepada Admin
                        </Text>
                            <Text style={styles.infoText}>
                                tautan untuk menyetel ulang sandi Anda
                        </Text>
                            <TouchableOpacity style={styles.buttonSubmit}>
                                <Text style={styles.buttonFont} onPress={() => Linking.openURL('mailto:adminCMS11@gmail.com?subject=Lupa kata Sandi&body=ISILAH FORMAT BERIKUT :\n\n\nNama Seksi Rohani :\n\nKelas :\n\nKontak :\n\nAlasan :\n\n\n\n\n#Catatan Mengaji Siswa')} >
                                    Kirim
                            </Text>

                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        );
    }
}