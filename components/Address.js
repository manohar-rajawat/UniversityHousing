import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const iconColor = "white";
const iconSize = 25;

const Address = ({ address }) => {
    return (
        <View style={styles.addressContainer}>
            <Ionicons name="home" size={iconSize} color={iconColor} />
            <Text style={styles.text}>{address}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    addressContainer: {
        flex: 1,
        height: 80,
        backgroundColor: '#4169e1',
        borderRadius: 20,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    text: {
        fontFamily: 'Ionicons',
        fontSize: 15,
        flexShrink: 1,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: 'white'
    },
})

export default memo(Address);