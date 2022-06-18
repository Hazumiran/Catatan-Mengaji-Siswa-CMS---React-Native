import React, { Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Support from './support';
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
import axios from 'axios';
import APIKit from './APIKit';

let suratHelper = require('../suratList.json')
export default class QuranLogin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,

      allSurat: suratHelper,
      suratFiltered: suratHelper
    }
  }


  componentDidMount() {
    this.getData()
  }

  getData() {
    AsyncStorage.getItem('token', (err, access_token) => {

      APIKit.get('/qurans', {
        headers: {
          Authorization: 'Bearer ' + access_token
        },
      })
        .then(res => {
          console.log('res get quran: ', res.data);
          this.setState({ isLoading: false })
        })
    })
  };


  //search surat function
  searchSurat(textToSearch) {
    this.setState({
      suratFiltered: this.state.allSurat.filter(i =>
        i.surat.toLowerCase().includes(textToSearch.toLowerCase())
      )
    })
  }


  render() {

    if (this.state.isLoading) return <Spinner overlayColor="none" color="blue" size="large" visible={this.state.isLoading} />

    return (
      <Container>
        <Header searchBar rounded style={{ backgroundColor: '#136DF3' }}>


          <Item>
            <Icon name="search" />
            <Input
              placeholder="Cari Surat..."
              onChangeText={text => { this.searchSurat(text) }}
            />
          </Item>

        </Header>
        {/* <Fab
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => this.props.navigation.navigate('F')}
        > */}

        <Content>
          <ScrollView>
            {
              this.state.suratFiltered.map((item, i) => (
                <Fragment key={i}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('AyatPage', { no_surat: item.no_surat, surat: item.surat })}>

                    <Support
                      numbers={item.no_surat}
                      title={item.surat}
                      subtitle={item.mean}
                      ayat={item.ayat}

                    />
                  </TouchableOpacity>
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