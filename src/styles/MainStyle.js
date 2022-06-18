import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
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
      backgroundColor: '#fff',
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
  export default styles;