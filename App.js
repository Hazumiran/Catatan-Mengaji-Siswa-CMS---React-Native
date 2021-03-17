import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';




import Forgot from './src/ForgotPassword';
import SplashScreen from './src/SplashScreen';
import Profile from './src/Profile';
import MainPage from './src/MainPage';
import Quran from './src/MainPage-b'
import TabNav from './src/TabNav';
import F from './src/F';
import Route from './src/Route';
import AlFatihah from './src/surat/AlFatihah';
import Mission from './src/mission';
import Feedback from './src/Feedback';
import Crud from './src/Crud';

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({

  F: { screen: F },
  Crud: { screen: Crud },
  ForgotPassword: { screen: Forgot },
  SplashScreen: { screen: SplashScreen },
  MainPage: { screen: MainPage },
  Profile: { screen: Profile },
  Mission: { screen: Mission },
  Feedback: { screen: Feedback },
  Quran: { screen: Quran },
  TabNav: { screen: TabNav },
  AlFatihah: { screen: AlFatihah },
  Route: { screen: Route }



},
  {
    initialRouteName: 'Crud',
    header: null,
    headerMode: 'none'
  }

);

const AppContainer = createAppContainer(AppStackNavigator);

// ---------------------------------------------------------
// import 'react-native-gesture-handler';
// import React, { useEffect, useState, Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { AsyncStorage } from 'react-native';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   TextInput
// } from 'react-native';


// //importing screens
// import LoginScreen from './src/Tumbal/Login';
// import HomeScreen from './src/Tumbal/Home';
// import LoadScreen from './src/Tumbal/Loading';

// const Stack = createStackNavigator();

// const App = () => {

//   const [foundToken, setFoundToken] = useState('');
//   const [isLoad, setIsLoad] = useState(true);

//   const checkToken = async () => {
//     try {
//       let findingToken = await AsyncStorage.getItem('token');
//       setFoundToken(findingToken);
//       setIsLoad(false);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const loginAction = async () => {
//     //Proses post login form untuk mendapat token/ semacamnya

//     let dummyToken = 'CodeSeemToken';

//     try {
//       await AsyncStorage.setItem('token', dummyToken);
//       setFoundToken(dummyToken);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const logoutAction = async () => {
//     try {
//       await AsyncStorage.removeItem('token');
//       setFoundToken('');
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     checkToken();
//   }, []);


//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {
//           foundToken
//             ? <Stack.Screen name="Home">
//               {props => <HomeScreen {...props} logout={logoutAction} />}
//             </Stack.Screen>
//             : (isLoad
//               ? <Stack.Screen
//                 name="Load"
//                 options={{ headerShown: false }}>
//                 {props => <LoadScreen {...props} />}
//               </Stack.Screen>
//               : <Stack.Screen name="Login">
//                 {props => <LoginScreen {...props} login={loginAction} />}
//               </Stack.Screen>
//             )
//         }
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;