import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const iconColor = "green";
const iconSize = 20;

const Row = ({ children }) => (
    <View style={styles.rowContainer}>
        {children}
    </View>
)

export default Amenity = ({ amenity }) => {
    return (
        <View style={styles.amanityContainer}>
            <Row>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Gym</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name="checkmark-circle" size={iconSize} color={iconColor} />
                </View>
            </Row>
            <Row>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Swimming</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name="checkmark-circle" size={iconSize} color={iconColor} />
                </View>
            </Row>
            <Row>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Parking</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name="close-circle" size={iconSize} color='red' />
                </View>
            </Row>
            <Row>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Wifi</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name="checkmark-circle" size={iconSize} color={iconColor} />
                </View>
            </Row>
            <Row>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Sport Ground</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name="checkmark-circle" size={iconSize} color={iconColor} />
                </View>
            </Row>
            <Row>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Indoor Games</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name="checkmark-circle" size={iconSize} color={iconColor} />
                </View>
            </Row>
            <Row>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Barbecue</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name="close-circle" size={iconSize} color='red' />
                </View>
            </Row>
            <Row>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Jacuzzi</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name="close-circle" size={iconSize} color='red' />
                </View>
            </Row>
            <Row>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Laundry</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name="checkmark-circle" size={iconSize} color={iconColor} />
                </View>
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    amanityContainer: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
    },
    textContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: 12,
        fontFamily: 'FontAwesome',
    },
    icon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})