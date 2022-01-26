import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const iconColor = "#4169e1";
const iconSize = 30;
const IconType = ({ name }) => {
    if (['receipt', 'people'].includes(name))
        return <Ionicons name={name} size={iconSize} color={iconColor} />
    return <FontAwesome name={name} size={iconSize} color={iconColor} />
}
const ExpenseList = ({ data }) => data.map((element, index) => {
    if (!element.includes(undefined))
        return (
            <View key={index} style={styles.rentContainer}>
                <IconType name={element[0]} />
                <Text style={styles.text}>{element[1]}</Text>
            </View>
        )
})
export default Expenses = (props) => {
    return (
        <View style={styles.expenseContainer}>
            {
                <ExpenseList data={Object.values(props)} />
            }
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