import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Image, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import MainPage from './MainPage';
import Profile from './Profile';




// class HomeScreen extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>HomeScreen</Text>
//             </View>
//         )
//     }
// }

// class Profile extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Profile</Text>
//             </View>
//         )
//     }
// }

class About extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tahfidz Asuh</Text>
                <Text>Beta Version V.01</Text>
                <Text>Realease Date On September 2020</Text>
            </View>
        )
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const TabNavigator = createMaterialBottomTabNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
                </View>
            ),

            activeColor: "#f0edf6",
            inactiveColor: "#3e2465",
            barStyle: { backgroundColor: '#694fad' },
        }
    },

    Home: {
        screen: MainPage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
                </View>
            ),
            activeColor: "#f0edf6",
            inactiveColor: "#92c5c2",
            barStyle: { backgroundColor: '#2c6d6a' },
        }
    },

    About: {
        screen: About,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'ios-information-circle-sharp'} />
                </View>
            ),

            activeColor: "#f0edf6",
            inactiveColor: "#ebaabd",
            barStyle: { backgroundColor: '#d13560' },
        }
    },
},
    {
        initialRouteName: "Home",
        activeColor: "#f0edf6",
        inactiveColor: "#3e2465",
        barStyle: { backgroundColor: '#694fad' },
    }

);

export default createAppContainer(TabNavigator);