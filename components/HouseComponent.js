import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import FastImage from "react-native-fast-image";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const iconColor = 'green';
const House = ({ house }) => (
    <View style={styles.houseWrapper}>
        <View style={styles.imageWrapper}>
            <Image style={{ width: '100%', height: '100%', borderRadius: 20, }} source={house.logo} />
        </View>
        <View style={{ flex: 1.5 }}>
            <View style={styles.houseDetailWrapper}>
                <Text style={styles.titleText}>{house.type}</Text>
                <View style={styles.midRowWrapper}>
                    <FontAwesome name="dollar" size={20} color={iconColor} />
                    <Text style={styles.text}>{house.expenses.Rent}</Text>
                    <FontAwesome name="bed" size={20} color={iconColor} />
                    <Text style={styles.text}>{house.bed} Bed</Text>
                    <FontAwesome name="bath" size={20} color={iconColor} />
                    <Text style={styles.text}>{house.bathroom} Bath</Text>
                </View>
                <View style={styles.lowRowWrapper}>
                    <Ionicons name="home" size={20} color={iconColor} />
                    <Text style={styles.addressText}>{house.address}</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity onPress={() => console.log('favorite')} style={styles.saved}>
            <Ionicons name="heart" size={40} fille color="tomato" />
        </TouchableOpacity>
    </View>
)

export default HouseComponent = ({ data, navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('DetailPage', {
            house: item
        })}>
            <House house={item} />
        </TouchableOpacity>
    )
    return (
        <FlatList data={data}
            renderItem={renderItem} />
    )
}


const styles = StyleSheet.create({
    houseWrapper: {
        flexDirection: 'row',
        height: 150,
        padding: 15,
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: '#f5f5f5',
    },
    houseDetailWrapper: {
        flex: 1,
        justifyContent: "space-between",
        marginLeft: 10,
    },
    midRowWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },
    lowRowWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    imageWrapper: {
        flex: 1,
    },
    saved: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'FontAwesome',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500',
        fontFamily: 'FontAwesome'
    },
    addressText: {
        flexShrink: 1,
        textAlign: "center",
        fontSize: 10,
        fontWeight: '400',
    },
})