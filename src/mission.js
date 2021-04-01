import React, { Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Scroll from './scroll';
import Support from './supportProgress';
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
import APIkit from './APIKit';

export default class Mission extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataini: [],
            isLoading: true
        };
    }
    logout = () => {
        this.props.navigation.dispatch(resetAction);
        alert('berhasil logout')
    }
    renderDataini() {
        this.state.dataini.map(dataini => <Text> {dataini.tanggal} </Text>);
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        AsyncStorage.getItem('token', (err, access_token) => {
            APIkit.get('/progress', {
                headers: {
                    Authorization: 'Bearer ' + access_token
                }
            })
                .then((res) => {

                    console.log('res get data: ', res.data.data.data);
                    this.setState({ dataini: res.data.data.data, isLoading: false });
                });
        })
    }

    render() {

        return (

            <Container>
                <Header>
                    <Body>
                        <Title style={{ left: 10 }}>
                            <Text>
                                Progresku
                            </Text>
                        </Title>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Crud')}>
                            <FIcon name="plus" size={30} color={'#fff'} />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <ScrollView>
                        {this.state.dataini.map((item, i) => (
                            <Fragment key={i}>
                                <Support
                                    tanggal={item.tanggal}
                                    subSurat={item.surat_ke}
                                    subAyat={item.ayat_ke}
                                />
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