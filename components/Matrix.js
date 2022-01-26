import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MatrixList } from '../src/configuration/MatrixList';

const iconSize = 20;
const Row = ({ children }) => (
    <View style={styles.rowContainer}>
        {children}
    </View>
)

export default Matrix = ({ matrix }) => {
    const matrixList = MatrixList.map((element, index) => {
        const currentElement = matrix[element];
        if (typeof (currentElement) == 'object')
            return null;
        if (currentElement != undefined) {
            const checkBox = currentElement ? "checkmark-circle" : "close-circle";
            const iconColor = currentElement ? "green" : "tomato";
            return (
                <Row key={index}>
                    <Text style={styles.text}>{element}</Text>
                    <Ionicons style={{ flex: 1 }} name={checkBox} size={iconSize} color={iconColor} />
                </Row>
            )
        }

    })
    return (
        <View style={styles.matrixContainer}>
            <Row>
                <View style={styles.headerStyle}>
                    <Text style={styles.header}>Available</Text>
                </View>
            </Row>
            {
                matrixList
            }
        </View>
    )
}

const styles = StyleSheet.create({
    matrixContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
    },
    headerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4169e1',
        paddingVertical: 5,
        borderRadius: 20,
    },
    header: {
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1,
    },
    text: {
        flex: 1,
        fontSize: 12,
        fontFamily: 'FontAwesome',
    },
})