import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons';
import F from './F';
import MainPage from './MainPage';
import Profile from './Profile';

const MainStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const LogoutStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackScreen = ({ navigation }) => (
    <MainStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: 'rgb(92,78,176)'
        },
        headerTintColor: "#fff",
        headerTintStyle: {
            fontWeight: 'bold'
        }
    }}>
        <MainStack.Screen name="Main" component={MainPage} options={{
            headerLeft: () => (
                <Icon.Button
                    name="ios-menu"
                    size={25}
                    backgroundColor="rgb(92,78,176)"
                    onPress={() => navigation.openDrawer()}
                />


            )
        }} />
    </MainStack.Navigator>
);
const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: 'rgb(92,78,176)'
        },
        headerTintColor: "#fff",
        headerTintStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ProfileStack.Screen name="Profile" component={Profile} options={{
            headerLeft: () => (
                <Icon.Button
                    name="ios-menu"
                    size={25}
                    backgroundColor="rgb(92,78,176)"
                    onPress={() => navigation.openDrawer()}
                />
            ),
            headerRight: () => (
                <Icon.Button
                    name="ios-menu"
                    size={25}
                    backgroundColor="rgb(92,78,176)"
                    onPress={() => this.props.navigation.navigate('F')}
                />
            ),
        }} />
    </ProfileStack.Navigator>
);

const LogoutStackScreen = ({ navigation }) => (
    <LogoutStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: 'rgb(92,78,176)'
        },
        headerTintColor: "#fff",
        headerTintStyle: {
            fontWeight: 'bold'
        }

    }}>
        <LogoutStack.Screen name="Logout" component={F} />
    </LogoutStack.Navigator>


);


const Route = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="MainPage" component={MainStackScreen} />
                <Drawer.Screen name="Profile" component={ProfileStackScreen} />
                <Drawer.Screen name="Logout" component={F} />

            </Drawer.Navigator>

        </NavigationContainer>
    )
}

export default Route;