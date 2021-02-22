import React, { Component } from 'react';
import { StyleSheet, Image, View, ScrollView, Animated, LogBox, Text, TouchableOpacity } from 'react-native';
import {
  Container,
  Card,
  Thumbnail
} from 'native-base';

import axios from 'axios';
import santriL from '../Image/santri.png';
import avatarL from '../Image/avatar.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';



const HEADER_MIN_HEIGHT = 0;
const HEADER_MAX_HEIGHT = 200;

export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataini: [],
      text: ''
    }
    this.scrollYAnimatedValue = new Animated.Value(0);
    this.array = [];
  }
  // componentWillMount() {
  //   for (var i = 1; i <= 10; i++) {
  //     this.array.push(i);
  //   }
  // }
  componentDidMount() {
    LogBox.ignoreLogs(["key"]);
    this.getData()
  }
  getData() {
    axios.get('http://192.168.43.246:8000/santri', { headers: { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjQzLjI0Njo4MDAwXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxMzE5MjIxMiwiZXhwIjoxNjEzMTk1ODEyLCJuYmYiOjE2MTMxOTIyMTIsImp0aSI6IktBbThmV2tPem5tRlh0c1ciLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.VY6ma0_LuIzWvKRQhfVS7T4rsplLnbdVe2BMBT7eFkE"' } }).then(res => {
      console.log(res.data)
      this.setState({ dataini: res.data.data })
    })
  }
  render() {

    var data = this.state.dataini.map((sheet, i) => {
      //   var status = <></>
      //       if( sheet.status === '0' ){
      //           status = <Typography>Belum diperiksa</Typography>
      //       }else if(sheet.status === '1'){
      //           status = <Typography>Diterima</Typography>
      //       }else{
      //           status = <Typography>Ditolak</Typography>
      //       }

      //       return(
      //           <>
      //           <View>
      //               <Card>{sheet.santri_name}</Card>
      //               {/* <TableCell>{sheet.tgl_pengajuan}</TableCell>
      //               <TableCell>{sheet.santri_address}</TableCell>
      //               <TableCell>{sheet.santri_address}</TableCell>
      //               <TableCell>{status}</TableCell> */}
      //           </View>
      //           </>
      //       )
      return (
        <>
          <Card style={styles.cardList}>
            <Thumbnail style={styles.avatar} source={avatarL} />
            <Text style={styles.cardText}>{sheet.santri_name}</Text>
          </Card>
          {/* <Card style={styles.cardList}>
                <Text>{sheet.santri_name}</Text>
              </Card> */}
        </>
      )
    })


    // var data = this.state.dataini.map((sheet, i)=>{
    //   var status = <></>
    //       if( sheet.status === '0' ){
    //           status = <Typography>Belum diperiksa</Typography>
    //       }else if(sheet.status === '1'){
    //           status = <Typography>Diterima</Typography>
    //       }else{
    //           status = <Typography>Ditolak</Typography>
    //       }

    //       return(
    //           <>
    //           <View>
    //               <Card>{sheet.santri_name}</Card>
    //               {/* <TableCell>{sheet.tgl_pengajuan}</TableCell>
    //               <TableCell>{sheet.santri_address}</TableCell>
    //               <TableCell>{sheet.santri_address}</TableCell>
    //               <TableCell>{status}</TableCell> */}
    //           </View>
    //           </>
    //       )
    //   })

    //----------------------------------------------------------------------------------------------//

    //ANIMATED HEADER

    const headerHeight = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
      });

    const headerBackgroundColor = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: ['#5c4eb0', '#5c4eb0'],
        extrapolate: 'clamp'
      });

    return (
      <Container style={styles.container}>
        <View style={styles.header}>


        </View>

        <Animated.View style={[styles.animatedHeaderContainer, { height: headerHeight, backgroundColor: headerBackgroundColor }]}>
          <View style={styles.footer}>
            <Card style={styles.cardCatList}>
              <Image source={santriL} style={{ width: '83%', height: '83%', marginHorizontal: '7%' }} />
            </Card>
            <Text style={styles.headerText}>
              Santri
                </Text>
          </View>
        </Animated.View>

        <ScrollView
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
          )}>
          <View style={styles.footer1}>
            {data}
          </View>
        </ScrollView>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(92,78,176)'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-20%',

  },
  bookmarkIcon: {
    position: 'absolute',
    top: '20%',
    left: '4%',
  },
  profileIcon: {
    position: 'absolute',
    top: '15%',
    right: '4%',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 60,
    paddingBottom: 220,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    alignContent: 'center',
  },
  footer1: {
    flex: 2,
    backgroundColor: 'rgb(92,78,176)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 50,
    marginTop: -150
  },
  cardCatList: {
    top: 60,
    width: 140,
    height: 110,
    backgroundColor: 'rgb(223,222,254)',
    borderRadius: 20,
    // justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    // paddingLeft: 15
  },
  cardList: {
    backgroundColor: 'rgb(223,222,254)',
    width: '95%',
    height: 55,
    borderRadius: 70,
    // justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: '5%',
    marginTop: '3.5%'
  },
  cardText: {
    textAlign: 'left',
    paddingLeft: 10
  },
  avatar: {
    width: 57,
    height: 57,
    marginLeft: -25
  },
  animatedHeaderContainer: {
    position: 'relative',
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  headerText: {
    color: 'rgb(92,78,176)',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    top: 60
  }


});