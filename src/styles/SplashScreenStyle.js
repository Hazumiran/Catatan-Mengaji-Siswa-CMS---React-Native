import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(92, 78, 176)',
        justifyContent: 'center',
        display: 'flex'
    },
    headerText: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold'
    },
    headerTextWrapper: {
        alignItems: 'center',
    },
    subHeaderTextWrapper: {
        marginVertical: 20,
        alignItems: 'center',
    },
    subHeaderText: {
        fontSize: 20,
        color: 'white',
    },
    mainImage: {
        marginTop: 25,
        marginBottom: 30,
        height: 200,
        width: 200,
        alignSelf: 'center',
        borderRadius: 60
    }

})

export default styles;