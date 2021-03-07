

// Define some colors and default sane values
const utils = {
    colors: { primaryColor: '#FFFFFF' },
    dimensions: { defaultPadding: 12 },
    fonts: { largeFontSize: 18, mediumFontSize: 16, smallFontSize: 12 },
};

// Define styles here
const styles = {
    innerContainer: {
        marginBottom: 32,
    },
    logotypeContainer: {
        alignItems: 'center',
        marginBottom: '10%',
        marginTop:'-10%',
    },
    logotype: {
        maxWidth: 280,
        maxHeight: 100,
        resizeMode: 'contain',
        alignItems: 'center',
    },
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f6f6f6',
    },
    input: {
        height: 50,
        padding: 12,
        borderRadius: 6,
        shadowColor: '#000',
        color: '#fff',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        marginBottom: utils.dimensions.defaultPadding,
        paddingLeft: 49,
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 15
    },
    // input: {
    //     width: 320,
    //     height: 45,
    //     borderRadius: 25,
    //     fontSize: 16,
    //     paddingLeft: 49,
    //     borderWidth: 1,
    //     padding: '4%',
    //     borderColor: 'rgb(92,78,176)',
    //     color: 'rgb(92,78,176)'
    // },
    loginButton: {
        borderColor: utils.colors.primaryColor,
        borderWidth: 2,
        padding: utils.dimensions.defaultPadding,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    loginButtonText: {
        color: utils.colors.primaryColor,
        fontSize: utils.fonts.mediumFontSize,
        fontWeight: 'bold',
    },
    errorMessageContainerStyle: {
        marginBottom: 8,
        backgroundColor: '#fee8e6',
        padding: 8,
        borderRadius: 4,
    },
    errorMessageTextStyle: {
        color: '#db2828',
        textAlign: 'center',
        fontSize: 12,
    },
    //created by naufal
    cardView:{
        backgroundColor: '#f6f6f6',
        paddingVertical: 70,
        paddingHorizontal: 20,
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
        borderTopLeftRadius: 35,
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 13
    },
    logoStyle: {
        marginTop: 25,
        marginBottom: 30,
        height: 100,
        width: 100,
        alignSelf: 'center',
        borderRadius: 60
    }
    
};

export default styles;