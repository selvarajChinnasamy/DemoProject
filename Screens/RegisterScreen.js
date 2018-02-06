import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, AsyncStorage, TextInput, Button } from 'react-native';

class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            phone: null,
            email: null,
        }
    }
    register = () => {
        if ((this.state.username != null) && (this.state.password != null) && (this.state.phone != null) && (this.state.email != null)) {
            fetch('https://0e0b0i6d2g.execute-api.ap-south-1.amazonaws.com/dev/user', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email,
                    phone: this.state.phone,
                })
            }).then(response => {
                alert(JSON.stringify(response));
                let body = JSON.parse(response['_bodyText']);
                //alert(body['message']);
            })
        }
    }

    login = () => {
        this.props.navigation.navigate('LoginScreen');
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.head}>Register</Text>
                </View>
                <View style={{ width: '90%', marginLeft: '5%' }}>
                    <View style={{ marginTop: 80 }}>
                        <Text style={{ marginLeft: 10 }}>User Name</Text>
                        <TextInput
                            onChangeText={(username) => this.setState({ username })}
                        />
                        <Text style={{ marginLeft: 10 }}>Password</Text>
                        <TextInput
                            onChangeText={(password) => this.setState({ password })}
                        />
                        <Text style={{ marginLeft: 10 }}>Phone</Text>
                        <TextInput
                            onChangeText={(phone) => this.setState({ phone })}
                        />
                        <Text style={{ marginLeft: 10 }}>Email</Text>
                        <TextInput
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </View>
                    <View style={styles.loginButt}>
                        <Button
                            onPress={this.register}
                            title="Register"
                            color="#6cac1a"
                        />
                    </View>
                </View>
                <Text style={styles.register} onPress={this.login}>Login Now</Text>
            </View>
        );
    }
}
export default RegisterScreen;

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