/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import { StyleSheet } from 'react-native';
// import iPhoneSize from '../../helpers/utils';
// import colors from './colors';

// let headingTextSize = 30;
// if (iPhoneSize() === 'small') {
//   headingTextSize = 26;
// }

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  scrollViewWrapper: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

  },
  scrollView: {
    flex: 1,
  },
  forgotPasswordHeading: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    paddingLeft: '10%'
  },
  forgotPasswordSubheading: {
    color: 'white',
    fontWeight: '600',
    fontSize: 25,
    marginTop: '10%',
    marginBottom: '5%',
    textAlign: 'center',
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
  formInput: {
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: '5%',
    marginVertical: '4%',
    borderWidth: 1,
    borderColor: '#808080',
    paddingLeft: '9%',
    color: 'black',
    width: 300,
    marginTop: '4%',
    alignSelf: 'center'
  },

  buttonSubmit: {
    height: 45,
    width: 120,
    backgroundColor: 'rgb(92,78,176)',
    borderRadius: 15,
    padding: '5%',
    marginVertical: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25
  },
  buttonFont: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  errorLabel: {
    color: "red",
    fontSize: 10
  },
  infoText: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white'
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
  }, logoStyle: {
    marginTop: 25,
    marginBottom: 30,
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 60
  },
  footer: {
    flex: 1,

    borderTopRightRadius: 80,
    paddingTop: '25%',
    paddingBottom: '40%',
    paddingHorizontal: '13%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
});

export default styles;
