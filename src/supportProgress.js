import React from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable';
import APIkit from './APIKit';

deleteItem = () => {
    AsyncStorage.getItem('token', (err, access_token) => {
        APIkit.delete(`/progress/${id}`, {
            headers: {
                Authorization: 'Bearer ' + access_token
            }
        })
            .then(res => {
                console.log('res delete', res);
                getData();
            })
    })
}

export default class Support extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, height: 39, borderRadius: 100, backgroundColor: '#136DF3', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>{this.props.nomor}</Text>
                </View>
                <View style={{ flex: 5, margin: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: -0.5, color: '#2D2D2D' }}>{this.props.tanggal}</Text>

                    <View style={{ flex: 5, margin: 15, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, color: '#BEC4C9', }}>{this.props.subSurat}</Text>
                        <Text style={{ fontSize: 15, color: '#BEC4C9', }}>{this.props.subAyat}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../Image/rightbutton.png')} onPress={() => deleteItem()} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}