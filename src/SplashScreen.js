import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    ImageBackground,
    Animated,
    LogBox
} from 'react-native';
import styles from "./styles/SplashScreenStyle";
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';



export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LogoText: new Animated.Value(0),
            LogoAnime: new Animated.Value(0),
            loadingSpinner: false
        }
    }
    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        LogBox.ignoreLogs(['Picker']);
        const { LogoText, LogoAnime } = this.state;
        Animated.parallel([
            Animated.spring(LogoAnime, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 40000,
            }).start(),

            Animated.timing(LogoText, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }),
        ]).start(() => {
            this.setState({
                loadingSpinner: true,
            });
        });
    }
    render() {
        setTimeout(() => {
            this.props.navigation.dispatch(resetAction);

        }, 3500);
        return (
            <ImageBackground style={styles.container} source={require('../assets/backgrounds/splash-bg.jpg')}>
                <Animated.View style={{ opacity: this.state.LogoText }}>
                    <View style={styles.headerTextWrapper}>
                        <Text style={styles.headerText}>
                            Catatan Mengaji
                    </Text>
                        <Text style={styles.headerText}>
                            Siswa
                    </Text>
                    </View>
                    <View style={styles.subHeaderTextWrapper}>
                        <Text style={styles.subHeaderText}>
                            Buku Catatan Mengaji Untuk Membuat
                    </Text>
                        <Text style={styles.subHeaderText}>
                            Belajar Lebih Mudah
                    </Text>
                    </View>
                </Animated.View>
                <Animated.View
                    style={{
                        opacity: this.state.LogoAnime,
                        top: this.state.LogoAnime.interpolate({
                            inputRange: [0, 1],
                            outputRange: [80, 0],
                        })
                    }}>
                    <Image style={styles.mainImage} source={require('../assets/icons/praying.png')} />
                </Animated.View>
            </ImageBackground>
        )
    }
}
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Quran' })],
});