import React from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable';
import APIkit from './APIKit';




export default class Support extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, padding: 10, margin: 10, borderRadius: 10, backgroundColor: '#136DF3', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>{this.props.avatar}</View>
                </View>
                <View style={{ flex: 5, margin: 10, top: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: -0.5, color: '#2D2D2D' }}>{this.props.tanggal}</Text>

                    <View style={{ flex: 5, marginVertical: 10, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, color: '#616161' }}>Surat: {this.props.subSurat}</Text>
                        <Text style={{ fontSize: 15, color: '#616161', left: 10 }}>Ayat: {this.props.subAyat}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => deleteItem(item)}>
                        <Text>{this.props.icon}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

