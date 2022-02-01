import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

const SelectedView = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                <FastImage style={{ width: 100, height: 100, }} source={{
                    uri: item.logo
                }} />
                <Text style={styles.nameUniversity}>{item.name}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SavedStack', { screen: 'Saved' })} style={[styles.buttonStyle, { backgroundColor: 'tomato' }]}>
                    <Text style={styles.textStyle}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ResultSearch = ({ route }) => {
    return (
        <SelectedView item={route.params.item} />
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