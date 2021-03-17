import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    Button,
    ScrollView,
    Image

} from 'react-native';
import axios from 'axios';



const Item = ({ ustadz_name, ustadz_address, ustadz_contact, ustadz_birth, institute }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={require(`../Image/user.png`)} style={styles.avatar} />
            <View style={styles.desc}>
                <Text style={styles.descNama}>Nama Ustad: {ustadz_name}</Text>
                <Text style={styles.descAlamat}>almt Ustad: {ustadz_address}</Text>
                <Text style={styles.descKontak}>cont Ustad: {ustadz_contact}</Text>
                <Text style={styles.descTgl}>tgll Ustad: {ustadz_birth}</Text>
                <Text style={styles.descInst}>inst Ustad: {institute}</Text>
            </View>
            <Text style={styles.delete}>X</Text>
        </View>
    )
}

const { width: WIDTH } = Dimensions.get('window')



const Crud = () => {

    const [ustadz_name, setNama] = useState("");
    const [ustadz_address, setAlamat] = useState("");
    const [ustadz_contact, setKontak] = useState("");
    const [ustadz_birth, setTanggal] = useState("");
    const [institute, setInstitute] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getData();
    }, []);


    const submit = () => {
        const data = {
            // id,
            ustadz_name,
            ustadz_address,
            ustadz_contact,
            ustadz_birth,
            institute,

        }
        console.log('data before send: ', data);

        var axios = require('axios');

        var config = {
            method: 'post',
            url: 'http://192.168.1.7:8000/ustadz',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuNzo4MDAwXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNTkxMTY0OCwiZXhwIjoxNjE1OTE1MjQ4LCJuYmYiOjE2MTU5MTE2NDgsImp0aSI6IlhlWnplTEFtMFh0ZHFyTEciLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Nbu4zvH_zjKJrTP44kuj82JHy-nJf-QzfLZPtPghFqM'
            }, data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const getData = () => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://192.168.1.7:8000/ustadz',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuNzo4MDAwXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNTkxMTY0OCwiZXhwIjoxNjE1OTE1MjQ4LCJuYmYiOjE2MTU5MTE2NDgsImp0aSI6IlhlWnplTEFtMFh0ZHFyTEciLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Nbu4zvH_zjKJrTP44kuj82JHy-nJf-QzfLZPtPghFqM'
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <View style={styles.footer1}>
            <ScrollView>
                <Text style={styles.logoText}>CRUD</Text>
                <Text style={styles.texttitle}>Masukan Data Ustad</Text>
                <TextInput style={styles.input} placeholder="Nama ustad" value={ustadz_name} onChangeText={(value) => setNama(value)} />
                <TextInput style={styles.input} placeholder="Alamat" value={ustadz_address} onChangeText={(value) => setAlamat(value)} />
                <TextInput style={styles.input} placeholder="Kontak" value={ustadz_contact} onChangeText={(value) => setKontak(value)} />
                <TextInput style={styles.input} placeholder="Tanggal lahir" value={ustadz_birth} onChangeText={(value) => setTanggal(value)} />
                <TextInput style={styles.input} placeholder="Nama institue" value={institute} onChangeText={(value) => setInstitute(value)} />


                <Button title="Simpan" onPress={submit} />
                <View style={styles.line} />
                {users.map(user => {
                    return <Item ustadz_name={user.ustadz_name} ustadz_address={user.ustadz_address} ustadz_contact={user.ustadz_contact} ustadz_birth={user.ustadz_birth} institute={user.institute} />
                })}

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
