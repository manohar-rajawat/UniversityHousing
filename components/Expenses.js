import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default Expenses = ({ expense }) => {
    const iconColor = "#4169e1";
    const iconSize = 30
    return (
        <View style={styles.expenseContainer}>
            <View style={styles.rentContainer}>
                <FontAwesome name="dollar" size={iconSize} color={iconColor} />
                <Text style={styles.text}>{expense.Rent}</Text>
            </View>
            <View style={styles.wifiContainer}>
                <FontAwesome name="wifi" size={iconSize} color={iconColor} />
                <Text style={styles.text}>{expense.Wifi}</Text>
            </View>
            <View style={styles.utilityContainer}>
                <Ionicons name="receipt" size={iconSize} color={iconColor} />
                <Text style={styles.text}>{expense.Utility}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    expenseContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        marginBottom: 10,
    },
    rentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wifiContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    utilityContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Ionicons',
        fontSize: 20,
        marginLeft: 5,
    },
})