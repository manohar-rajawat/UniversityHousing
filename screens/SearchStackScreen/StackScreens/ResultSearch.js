import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import FastImage from 'react-native-fast-image';

const SelectedView = ({ navigation, item }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                <FastImage style={{ width: 100, height: 100, }} source={item.logo} />
                <Text style={styles.nameUniversity}>{item.name}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log(item.name)} style={[styles.buttonStyle, { backgroundColor: 'tomato' }]}>
                    <Text style={styles.textStyle}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ResultSearch = ({ navigation, route }) => {
    return (
        <SelectedView navigation={navigation} item={route.params.item} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    nameUniversity: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 25,
        fontWeight: '500',
        fontFamily: 'FontAwesome',
    },
    buttonStyle: {
        marginVertical: 20,
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: '#666',
        borderRadius: 60,
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
        letterSpacing: 5
    },
})