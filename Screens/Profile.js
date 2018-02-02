import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Category from './Category';

const AppDrawerNavigator = DrawerNavigator({
    Category: { screen: Category },
    Logout: { screen: Category },
}, {
        contentComponent: props =>
            <View >
                <View style={{ alignItems: 'center', }}>
                    <Image
                        style={styles.drawerImage}
                        source={require('../assets/splash.jpg')} />
                </View>
                <View style={styles.drawerItemsstyle} >
                    <DrawerItems   {...props} />
                </View>
            </View>
    });
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7FFFD4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconstyle: {
        flexDirection: 'row',
        marginTop: 30,
    },
    headerstyle: {
        height: 20,
    },
    drawerImage: {
        height: 124,
        width: 124,
        marginTop: 30,
        borderRadius: 75,
    },
    drawerItemsstyle: {
        marginTop: 20,
    }
});

export default AppDrawerNavigator;