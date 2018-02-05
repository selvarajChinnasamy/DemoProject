import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, FlatList, Button, ScrollView, Picker, AsyncStorage, Keyboard } from 'react-native';
import { Icon, Header, Badge, SearchBar, Tile } from 'react-native-elements'

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

class Category extends React.Component {

  static navigationOptions = {
    drawerIcon: (
      <Image
        source={require('../assets/splash.jpg')}
        style={{ height: 24, width: 24 }} />
    )
  }

  constructor() {
    super();
    this.state = {
      language: 'Java',
    };
  }

  logout = () => {
    const value =  AsyncStorage.getItem('user');
    if (value != null) {
      console.warn(value);
      AsyncStorage.removeItem('user');
      this.props.navigation.navigate('LoginScreen');
    }
  }
  someMethod = () => {
     Keyboard.dismiss()
    alert('searching');
  }
  render() {
    return (
      <View>
        <Header style={styles.headerstyle} backgroundColor='#6cac1a'
          leftComponent={<View style={styles.iconstyle}><Icon color='#fff' name="menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} /></View>}
          centerComponent={{ text: 'Category List', style: { color: '#fff' } }}
          rightComponent={<View style={styles.iconstyle}><Icon color='#fff' name="nfc" onPress={this.logout} /></View>}
        />
        <SearchBar
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder='Type Here...' />
        <ScrollView>
          <Tile
            imageSrc={require('../assets/splash.jpg') }
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
            featured
            caption="Some Caption Text"
          />
          <View style={{ marginLeft: '70%', width: 100, height: 100 }}>
            <Picker
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="java Script" />
            </Picker>
          </View>
          <View style={{ height: 400 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              <View style={styles.card}>
                <Card>
                  <CardTitle>
                    <Text>{this.state.language}</Text>
                  </CardTitle>
                  <CardContent>
                    <Text>Content</Text>
                  </CardContent>
                  <CardAction >
                  </CardAction>
                </Card>
              </View>
              <View style={styles.card}>
                <Card>
                  <CardTitle>
                    <Text>{this.state.language}</Text>
                  </CardTitle>
                  <CardContent>
                    <Text>Content</Text>
                  </CardContent>
                  <CardAction >
                  </CardAction>
                </Card>
              </View>
              <View style={styles.card}>
                <Card>
                  <CardTitle>
                    <Text>{this.state.language}</Text>
                  </CardTitle>
                  <CardContent>
                    <Text>Content</Text>
                  </CardContent>
                  <CardAction >
                  </CardAction>
                </Card>
              </View>
              <View style={styles.card}>
                <Card>
                  <CardTitle>
                    <Text>{this.state.language}</Text>
                  </CardTitle>
                  <CardContent>
                    <Text>Content</Text>
                  </CardContent>
                  <CardAction >
                  </CardAction>
                </Card>
              </View>
              <View style={styles.card}>
                <Card>
                  <CardTitle>
                    <Text>{this.state.language}</Text>
                  </CardTitle>
                  <CardContent>
                    <Text>Content</Text>
                  </CardContent>
                  <CardAction >
                  </CardAction>
                </Card>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  card: { width: 200, height: 200 },
  contentContainer: {
    paddingVertical: 10,
  },
  container: {
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 20,
    color: '#fff',
    paddingVertical: 20,
  },
});

export default Category;