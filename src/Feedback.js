
import React, { Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, AsyncStorage, Image, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Scroll from './scroll';
import Support from './SupportFeedback';
import axios from 'axios';
import {
    Header,
    Container,
    Title,
    Right,
    Left,
    Content,
    Item,
    Body,
    Button
} from 'native-base'
import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/Entypo';
import FoundIcon from 'react-native-vector-icons/Foundation';
import { Divider } from 'react-native-paper';
import APIkit from './APIKit';
import Icon from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Mission extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataini: [],
            isLoading: true
        };
    }


    componentDidMount() {
        this.getData()
    }
    getData() {
        AsyncStorage.getItem('token', (err, access_token) => {
            APIkit.get('/penilaian', {
                headers: {
                    Authorization: 'Bearer ' + access_token
                }
            })
                .then((res) => {

                    console.log('res get data: ', res.data.data);
                    this.setState({ dataini: res.data.data, isLoading: false });
                });
        })
    }




    render() {
        const { isLoading } = this.state;

        return (

            <Container>
                <Header>
                    <Spinner overlayColor="none" color="blue" size="large" visible={isLoading} />
                    <Left>

                        <Icon style={{ left: 5 }} name="arrow-back" size={20} color={'#fff'} onPress={() => this.props.navigation.navigate('TabNav')} />
                    </Left>
                    <Body>
                        <Title>
                            <Text>
                                Penilaian Mengaji
                            </Text>
                        </Title>
                    </Body>

                </Header>
                <Content>
                    <ScrollView>
                        {this.state.dataini.map((item, i) => (
                            <Fragment key={i}>
                                <Support
                                    avatar={<FoundIcon name="clipboard-pencil" size={20} color={'#fff'} />}
                                    tanggal={item.progress.tanggal}
                                    feedback={item.feedback.feedback}
                                    subSurat={item.progress.surat_ke}
                                    subAyat={item.progress.ayat_ke}

                                />
                                <View style={{ backgroundColor: '#616161', height: 0.5, width: '100%' }} />

                            </Fragment>





                        ))
                        }
                    </ScrollView>
                </Content>
            </Container >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        left: 25,
        top: 30
    },
    tambah: {
        fontSize: 60,
        fontWeight: "bold", color: '#136DF3',
    },
    inline: {
        fontSize: 38,
        letterSpacing: -0.5,
        fontWeight: 'bold',
        color: '#2E2E2E'
    },
    memos: {
        height: 250,
        position: 'absolute',
        top: 160,
        width: '100%',
        marginLeft: 10
    },
    supportview: {
        position: 'absolute',
        left: 25,
        top: '10%',

    },
    support: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: -0.5,
        color: '#2E2E2E'
    },
    rectangleone: {
        height: 100,
        width: 300,
        position: 'absolute',
        alignSelf: 'center',
        top: 200,
        borderRadius: 18
    }
})