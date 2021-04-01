import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons'


export default class Support extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, paddingHorizontal: 15, top: 10, bottom: 100, flexDirection: 'row' }}>
                <View style={styles.cardlist}>
                    <View style={{ flex: 1, height: 39, borderRadius: 100, backgroundColor: '#136DF3', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>{this.props.numbers}</Text>
                    </View>
                    <View style={{ flex: 5, margin: 10, }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: -0.5, color: '#2D2D2D' }}>{this.props.title}</Text>
                        <Text style={{ fontSize: 15, color: '#1E90FF', }}>{this.props.subtitle}</Text>
                    </View>
                    <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>{this.props.ayat} ayat</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="chevron-forward-sharp" size={20} color={'#136DF3'} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardlist: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,

        width: '100%',
        height: 55,
        borderRadius: 10,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        marginTop: '3.5%'
    }
})