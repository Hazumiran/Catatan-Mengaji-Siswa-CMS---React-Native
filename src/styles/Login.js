
import { StyleSheet } from 'react-native';
// Define some colors and default sane values
const utils = {
    colors: { primaryColor: '#af0e66' },
    dimensions: { defaultPadding: 12 },
    fonts: { largeFontSize: 18, mediumFontSize: 16, smallFontSize: 12 },
};

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(92,78,176)'
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    logo: {
        width: 135,
        height: 120
    },
    logoText: {
        color: 'rgb(92,78,176)',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 35,
        alignSelf: 'center'
    },
    inputContainer: {
        marginTop: 10,
    },
    input: {
        width: 320,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 49,
        borderWidth: 1,
        padding: '4%',
        borderColor: 'rgb(92,78,176)',
        color: 'rgb(92,78,176)'
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 13
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 15
    },
    btnLogin: {
        height: 45,
        width: 320,
        backgroundColor: '#17386b',
        borderRadius: 25,
        padding: '5%',
        marginVertical: '4%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    errorLabel: {
        color: "red",
        fontSize: 10,
        marginHorizontal: 30
    },
    footer1: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 90,
        paddingVertical: '13%',
        paddingHorizontal: '14.5%',
        display: 'flex'

    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    btngoogle: {
        width: '40%',
        height: 38,
        borderRadius: 20,
        backgroundColor: '#17386b',
        justifyContent: 'center',
        marginTop: 10,
        left: 24
    },
    btnfb: {
        width: '40%',
        height: 38,
        borderRadius: 20,
        backgroundColor: '#17386b',
        justifyContent: 'center',
        marginTop: 10,
        right: -17
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: '-5%'
    },
    sosial: {
        position: 'absolute',
        top: 4,
        left: 10
    },
    sosialText: {
        left: 40,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    MainContainer: {
        top: 18,
        justifyContent: 'space-between',
        flexDirection: 'row',
        left: 7
    },

    forgotContainer: {
        top: '3%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        left: '10%',
        marginBottom: 10
    },

    forgotStyle: {
        color: 'rgb(92,78,176)',
        fontWeight: 'bold',
        fontSize: 18,
        left: '5%',
        marginBottom: 20,

    },

    signUpStyle: {
        color: 'rgb(92,78,176)',
        fontWeight: 'bold',
        fontSize: 15,
        left: 50,

    },
    signStyle: {
        color: 'rgb(92,78,176)',
        fontWeight: 'bold',
        fontSize: 15,
        right: 70,

    },


});

export default styles;