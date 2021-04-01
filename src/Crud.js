import React, { Component, useState, useEffect, Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    ScrollView,
    AsyncStorage

} from 'react-native';
import axios from 'axios';
import APIkit from './APIKit';

const Crud = () => {


    const [tanggal, setTgl] = useState("");
    const [ayat_ke, setAyat] = useState("");
    const [surat_ke, setSurat] = useState("");
    const [button, setButton] = useState("Simpan");



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
                url: 'http://192.168.1.8:8000/api/progress',
                headers: {
                    Authorization: 'Bearer ' + access_token
                }, data
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    alert('berhasil disimpan');
                    setTgl("");
                    setAyat("");
                    setSurat("");


                })
                .catch(function (error) {
                    console.log(error);
                    alert('gagal tersimpan');
                });
        })

    }



    return (
        <View style={styles.footer1}>
            <ScrollView>
                <Text style={styles.logoText}>Catatan Baru</Text>
                <Text style={styles.texttitle}>Masukan Data Progress</Text>
                <TextInput style={styles.input} placeholder="tanggal" value={tanggal} onChangeText={(value) => setTgl(value)} />
                <TextInput style={styles.input} placeholder="ayat" value={ayat_ke} onChangeText={(value) => setAyat(value)} />
                <TextInput style={styles.input} placeholder="surat" value={surat_ke} onChangeText={(value) => setSurat(value)} />

                <Button title={button} onPress={submit} />

                <View style={styles.line} />

            </ScrollView>
        </View>
    )

}

export default Crud
const styles = StyleSheet.create({

    logoText: {
        color: 'rgb(92,78,176)',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center'
    },
    texttitle: { textAlign: 'center', marginBottom: 10 },
    input: { borderWidth: 1, marginBottom: 12, borderRadius: 25, paddingHorizontal: 18 },
    line: { height: 2, backgroundColor: 'black', marginVertical: 25, },
    avatar: { width: 80, height: 80, borderRadius: 100 },
    desc: { marginLeft: 18, flex: 1 },
    descNama: { fontSize: 20, fontWeight: 'bold' },
    descAlamat: { fontSize: 16, },
    descKontak: { fontSize: 16, },
    descTgl: { fontSize: 16, },
    descInst: { fontSize: 16, },
    itemContainer: { flexDirection: 'row', marginBottom: 20 },
    delete: { fontSize: 30, fontWeight: "bold", color: 'red', marginRight: 15 },
    footer1: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 20,
        paddingHorizontal: 20,


    },

});