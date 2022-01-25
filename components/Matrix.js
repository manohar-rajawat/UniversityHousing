import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const iconColor = "green";
const iconSize = 20;

const Row = ({ children }) => (
    <View style={styles.rowContainer}>
        {children}
    </View>
)

export default Matrix = ({ matrix }) => {
    return (
        <View style={styles.matrixContainer}>
            <Row>
                <Text style={styles.text}>Man</Text>
                <Ionicons style={{ flex: 1 }} name="checkmark-circle" size={iconSize} color={iconColor} />
            </Row>
            <Row>
                <Text style={styles.text}>Woman</Text>
                <Ionicons style={{ flex: 1 }} name="close-circle" size={iconSize} color='red' />
            </Row>
            <Row>
                <Text style={styles.text}>Smoking</Text>
                <Ionicons style={{ flex: 1 }} name="checkmark-circle" size={iconSize} color={iconColor} />
            </Row>
            <Row>
                <Text style={styles.text}>Drinking</Text>
                <Ionicons style={{ flex: 1 }} name="checkmark-circle" size={iconSize} color={iconColor} />
            </Row>
            <Row>
                <Text style={styles.text}>Room</Text>
                <Ionicons style={{ flex: 1 }} name="close-circle" size={iconSize} color='red' />
            </Row>
            <Row>
                <Text style={styles.text}>Living Room</Text>
                <Ionicons style={{ flex: 1 }} name="checkmark-circle" size={iconSize} color={iconColor} />
            </Row>
            <Row>
                <Text style={styles.text}>Non Veg</Text>
                <Ionicons style={{ flex: 1 }} name="checkmark-circle" size={iconSize} color={iconColor} />
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    matrixContainer: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
    },
    text: {
        flex: 1,
        fontSize: 12,
        fontFamily: 'FontAwesome',
    },
})