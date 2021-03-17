import React, { Component } from "react";
import {
    ScrollView,
    View,
    Text,
    CheckBox
} from 'react-native'

export default class AlFatihah extends Component {
    state = {
        ayats: [
            { 'ayat': 'Al-Fatihah ayat 1', 'id': 1 },
            { 'ayat': 'Al-Fatihah ayat 2', 'id': 2 },
            { 'ayat': 'Al-Fatihah ayat 3', 'id': 3 },
            { 'ayat': 'Al-Fatihah ayat 4', 'id': 4 },
            { 'ayat': 'Al-Fatihah ayat 5', 'id': 5 },
            { 'ayat': 'Al-Fatihah ayat 6', 'id': 6 },
            { 'ayat': 'Al-Fatihah ayat 7', 'id': 7 },
        ]
    }
    render() {
        return (
            <ScrollView>
                {
                    this.state.ayats.map((item) => (
                        <View key={item.id} style={{
                            backgroundColor: item.id % 2 === 0 ? '#eee5ff' : '#ceebfd', height: 164,
                            alignItems: 'flex-end',
                        }}>
                            <Text style={{
                                marginTop: 40,
                                marginEnd: 20,
                            }}>
                                {item.ayat}
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
        )
    }
}