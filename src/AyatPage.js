import React, { Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Support from './supportList';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Button,
  Left,
  Right,
  Body,
  Icon,
  TextInput,
  ListItem,
  Card,
  Item,
  Input,
  Fab
} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import APIkit from './APIKit';
import axios from 'axios';
export default class QuranLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataini: [],
      text: '',
      isLoading: true
    }
  }
  componentDidMount() {
    this.getData()
  }

  getData() {
    AsyncStorage.getItem('token', (err, access_token) => {
      console.log('prams', this.state.dataini)

      APIkit.get(`/qurans/${(this.props.navigation.getParam('no_surat'))}`, {
        headers: {
          Authorization: 'Bearer ' + access_token
        },
      })
        .then(res => {

          console.log('res get qurans : ', res.data);
          this.setState({ dataini: res.data.data, isLoading: false });

        })
    })
  };

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
                {(this.props.navigation.getParam('surat'))}
              </Text>
            </Title>
          </Body>

        </Header>
        <Content>
          <ScrollView>
            {
              this.state.dataini.map((datanya, i) => (

                <Fragment key={i}>
                  <Support
                    numbers={datanya.no_ayat}
                    title={datanya.ayat}


                  />

                </Fragment>
              ))
            }



          </ScrollView>
        </Content>

      </Container>
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
    height: 85,
    width: 300,
    position: 'absolute',
    alignSelf: 'center',
    top: 200,
    borderRadius: 18
  },
  container1: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  cardList: {
    marginHorizontal: 3,
    marginVertical: 3,
    backgroundColor: 'blue'
  },
  fab: {
    position: 'absolute',
    margin: 26,
    right: 0,
    bottom: 0,
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#136DF3'
  },
})