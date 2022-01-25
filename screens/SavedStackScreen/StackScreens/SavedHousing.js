import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HouseComponent from '../../../components/House';
import { saved } from '../../../data/saved';

export default SavedHousing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HouseComponent navigation={navigation} data={saved} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
    },
})