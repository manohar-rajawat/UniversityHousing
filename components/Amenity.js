import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AmenityList } from '../src/configuration/AmenityList';

const iconColor = "green";
const iconColorCross = 'tomato';
const iconSize = 20;
const Row = ({ children }) => (
    <View style={styles.rowContainer}>
        {children}
    </View>
)

const Amenity = ({ amenity }) => {
    const amenityList = AmenityList.map((element, index) => {
        const currentElement = amenity[element];
        if (typeof (currentElement) == 'object')
            return null;
        if (currentElement != undefined) {
            const checkBox = currentElement ? "checkmark-circle" : "close-circle";
            const iconColor = currentElement ? "green" : "tomato";
            return (
                <Row key={index}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{element}</Text>
                    </View>
                    <View style={styles.icon}>
                        <Ionicons name={checkBox} size={iconSize} color={iconColor} />
                    </View>
                </Row>
            )
        }

    })
    return (
        <View style={styles.amanityContainer}>
            <Row>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Amenities</Text>
                </View>
            </Row>
            {
                amenityList
            }
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
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4169e1',
        paddingVertical: 5,
        borderRadius: 20,
    },
    headerText: {
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1,
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

export default memo(Amenity);