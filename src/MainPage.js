import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, ImageBackground } from 'react-native';
import Day from './day';
import Card from './card';
export default class MainPage extends React.Component {
  state = {
    color: '#136DF3',
    activestate: 'rgba(255, 255, 255, 0.291821)'
  }
  change = () => {
    return (
      this.props.navigation.navigate('Mission')

    );
  }
  change1 = () => {
    return (

      this.props.navigation.navigate('Crud')
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerone}>
          <View style={styles.boxone}></View>
          <View style={styles.boxtwo}>
            <Text style={styles.name}>Hi, Naufal</Text>
            <Text style={styles.subtitle}>Ini Catatan Mengaji Kelasmu !</Text>
            <TouchableOpacity style={{ marginHorizontal: 20, marginTop: '-20%', marginLeft: '90%', }} onPress={() => this.props.navigation.navigate('Profile')} ><Image source={require('../Image/user.png')} /></TouchableOpacity>
          </View>

          <View style={styles.boxthree}>
            <ImageBackground source={require('../Image/graphone.png')} style={{ width: 440, height: '100%', marginTop: -80 }} />
          </View>

        </View>
        <View style={styles.containertwo}>
          <View style={styles.line}></View>
          <View style={styles.progress}>
            <Text style={styles.textone}>My Progress</Text>
          </View>
          <View style={styles.cards}>
            <Card
              move="bounceInLeft"
              image={require('../Image/checkbox.png')}
              title="Catatan Mengaji"
              subtitle="Progres"
              completed="85%"
              screenchange={() => this.change()}
            />

            <Card
              move="bounceInRight"
              image={require('../Image/checktodo.png')}
              title="FeedBack"
              subtitle="5 out of 10 tasks"
              completed="75%"
              screenchange={() => this.change1()}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#136DF3'
  },
  containerone: {
    flex: 1.5,
    display: 'flex'
  },
  containertwo: {
    flex: 1,
    marginTop: -70,
    backgroundColor: '#fff',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  boxone: {
    flex: 1,
  },
  boxtwo: {
    flex: 0.8,
    marginHorizontal: 35
  },
  boxthree: {
    flex: 2.5,
  },
  boxfour: {
    marginTop: -40,
    flex: 0.5,
    color: '#fff',
    flexDirection: 'row',
  },
  name: {
    marginTop: -60,
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff'
  },
  line: {
    width: '80%',
    height: 2,
    backgroundColor: '#F4F0F0',
    borderRadius: 2,
    marginVertical: 25,
    left: 43
  },
  progress: {
    left: 50
  },
  textone: {
    fontSize: 20,
    color: '#2D2D2D',
    letterSpacing: -0.5
  },
  cards: {
    flex: 1,
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 30
  },

})
