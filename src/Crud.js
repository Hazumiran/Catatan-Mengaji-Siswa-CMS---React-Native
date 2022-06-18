import React, { useState, } from 'react';
import DatePicker from 'react-native-datepicker'
import { Button } from 'react-native-paper'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ImageBackground,
    ScrollView,
    AsyncStorage,
    TouchableOpacity

} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Spinner from 'react-native-loading-spinner-overlay';

const Crud = ({ navigation }) => {

    let today = new Date().toISOString().slice(0, 10)

    const [tanggal, setDate] = useState(today);
    const [isLoading, setLoading] = useState(false);



    const [ayat_ke, setAyat] = useState("");
    const [surat_ke, setSurat] = useState("");
    const [button] = useState("Simpan");

    const submit = () => {
        AsyncStorage.getItem('token', (err, access_token) => {
            const data = {
                tanggal,
                ayat_ke,
                surat_ke
            }
            var axios = require('axios');
            var config = {
                method: 'post',
                url: 'http://192.168.43.205:8000/api/progress',
                headers: {
                    Authorization: 'Bearer ' + access_token
                }, data
            };

            setLoading(true);
            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    alert('berhasil disimpan');
                    setDate("");
                    setAyat("");
                    setSurat("");
                    setLoading(false);


                })
                .catch(function (error) {
                    console.log(error);
                    alert('gagal tersimpan');
                    setLoading(false);
                });
        })

    }
    return (
        <>
            <ImageBackground style={styles.containerStyle} source={require('../assets/backgrounds/login.jpg')}>
                <TouchableOpacity style={{ margin: 25 }} onPress={() => navigation.navigate('Mission')} >
                    <Icon name="arrow-back" size={30} color={'white'} />
                </TouchableOpacity>
                <View style={{ flex: 1, top: '-5%', justifyContent: 'center' }}>
                    <Spinner overlayColor="none" color="black" size="large" visible={isLoading} />
                    <View style={styles.card}>

                        <Text style={styles.logoText}>Catatan Baru</Text>
                        <Text style={styles.texttitle}>Masukan Data Progress</Text>
                        <DatePicker
                            style={styles.dateInput}
                            date={tanggal}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateInput: {
                                    marginLeft: 36,
                                    borderWidth: 0,
                                    alignItems: 'flex-start'
                                },
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },

                            }}
                            onDateChange={(tanggal) => { setDate(tanggal) }}
                        />

                        <TextInput style={styles.input} placeholder="Nama Surat" value={surat_ke} onChangeText={(value) => setSurat(value)} />
                        <TextInput style={styles.input} keyboardType={'number-pad'} placeholder="Ayat" value={ayat_ke} onChangeText={(value) => setAyat(value)} />
                        <Button style={{ borderRadius: 20, backgroundColor: '#136DF3', height: 40, justifyContent: 'center' }} color="#fff" uppercase="true" onPress={submit} >
                            {button}
                        </Button>

                        <View style={styles.line} />
                    </View>
                </View>
            </ImageBackground>
        </>
    )

}
export default Crud
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,

        justifyContent: 'center',

    },

    logoText: {
        color: 'rgb(92,78,176)',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center'
    },
    texttitle: {
        textAlign: 'center',
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 25,
        paddingHorizontal: 18
    },
    dateInput: {
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 25,
        paddingHorizontal: 18,
        width: '100%',
        justifyContent: 'center',
        height: 50
    },
    line: {
        height: 2,
        backgroundColor: 'black',
        marginVertical: 15,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    desc: {
        marginLeft: 18,
        flex: 1
    },
    descNama: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    descAlamat: {
        fontSize: 16,
    },
    descKontak: {
        fontSize: 16,
    },
    descTgl: {
        fontSize: 16,
    },
    descInst: {
        fontSize: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 20
    },
    delete: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'red',
        marginRight: 15
    },
    card: {
        opacity: 0.8,
        borderRadius: 40,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },

});


