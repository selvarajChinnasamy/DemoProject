import React, { Component } from 'react';
import { View, Image, Text, Alert, StyleSheet, AsyncStorage, TextInput, Button, ToastAndroid, Keyboard } from 'react-native';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        }
    }
    componentDidMount() {
        this._loadInitialState().done();
    }
    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if ((value != null) && (value != '')) {
            this.props.navigation.navigate('ProfileScreen');
        }
    }
    login = () => {
        Keyboard.dismiss()
        if ((this.state.username != null) && (this.state.password != null)) {

            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json())
                .then(json => {
                    AsyncStorage.setItem('user', this.state.username);
                    console.warn(this.state.username);
                    ToastAndroid.show('user Id is:' + json.userId, ToastAndroid.SHORT);
                    this.props.navigation.navigate('ProfileScreen');
                })
        } else {
            Alert.alert(
                'Invalid User',
                'Try Login Again',
                [
                    { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }
    }

    register = () => {
        this.props.navigation.navigate('RegisterScreen');
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.head}>Login</Text>
                </View>
                <View style={{ width: '90%', marginLeft: '5%' }}>
                    <View style={{ marginTop: 120 }}>
                        <Text style={{ marginLeft: 10 }}>User Name</Text>
                        <TextInput
                            onChangeText={(username) => this.setState({ username })}
                        />
                        <Text style={{ marginLeft: 10 }}>Password</Text>
                        <TextInput
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>
                    <View style={styles.loginButt}>
                        <Button
                            onPress={this.login}
                            title="Login"
                            color="#6cac1a"
                        />
                    </View>
                    <Text style={styles.register} onPress={this.register}>Register Now</Text>
                </View>
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6cac1a',
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
    logintext: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButt: {
        marginTop: 40,
    },
    register: {
        marginTop: 10,
        marginLeft: '75%',
    }
});