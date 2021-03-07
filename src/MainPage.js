import React, { Component } from 'react';
import { StyleSheet, Image, View, ScrollView, Animated, LogBox, Text, TouchableOpacity } from 'react-native';
import {
  Container,
  Card,
  Thumbnail,
  
} from 'native-base';

import axios from 'axios';
import santriL from '../Image/santri.png';
import avatarL from '../Image/avatar.jpg';
// import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
// import { Icon } from 'native-base';
import AnimatedHeader from 'react-native-animated-header';
import Bg from '../assets/backgrounds/bg1.jpg';

getListItems = count => {
  const items = [];
  let i = 0;
 
  while (i < count) {
    i++;
    items.push(
      <View style={styles.spinnerButton}>
          <Text style={styles.spinnerText}>
              awokawokawok
          </Text>
      </View>
    );
  }
 
  return items;
};

export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataini: [],
      text: ''
    }
    
  }
  // componentWillMount() {
  //   for (var i = 1; i <= 10; i++) {
  //     this.array.push(i);
  //   }
  // }
  componentDidMount() {
    LogBox.ignoreLogs(['Animated.event']);
    LogBox.ignoreLogs(["key"]);
    this.getData()
  }
  getData() {
    axios.get('http://192.168.1.4:8000/santri', { headers: { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuNDo4MDAwXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNDQyNjY1NCwiZXhwIjoxNjE0NDMwMjU0LCJuYmYiOjE2MTQ0MjY2NTQsImp0aSI6IkdXWnBCNU9vQkRTM0FKU2giLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.KekHmsn3l4O5i62_SSbNlJ9inNDgUXOhbtBCR3yb23U"' } }).then(res => {
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

    return (
      <Container style={styles.container}>
        <AnimatedHeader 
        style={{flex: 1 }}
        backText='Back'
        title='Happy coding'
        renderLeft={() => (<MIcon name='arrow-back' style={{ marginLeft: 20, width: 30, height: 30 }} />)}
        renderRight={() => (<MIcon name='add' style={{ marginRight: 20 }} />)}
        backStyle={{ marginLeft: 10 }}
        backTextStyle={{fontSize: 14, color: '#000'}}
        titleStyle={{ justifyContent: 'center', fontSize: 22, left: 20, bottom: 20, color: '#fff' }}
        headerMaxHeight={200}
        imageSource={Bg}
        toolbarColor='#FFF'
        disabled={false}
      >

        {/* <Animated.View style={[styles.animatedHeaderContainer, { height: headerHeight, backgroundColor: headerBackgroundColor }]}>
          <View style={styles.footer}>
            <Card style={styles.cardCatList}>
              <Image source={santriL} style={{ width: '83%', height: '83%', marginHorizontal: '7%' }} />
            </Card>
            <Text style={styles.headerText}>
              Santri
                </Text>
          </View>
        </Animated.View> */}

        <ScrollView>
          
          <View style={{marginTop:15, marginBottom: 15}}>
            {/* {data} */}
            {getListItems(10)}
          </View>
        </ScrollView>
        </AnimatedHeader>
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
    marginTop: -150,
    alignItems: 'center'
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
  },
  spinnerButton:{
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'rgb(189, 170, 224)',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '90%',
    marginVertical: 5
    
  },
  spinnerText:{
    fontSize: 20,
    color:'rgb(92, 80, 176)'
  },


});