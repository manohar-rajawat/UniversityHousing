import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Matrix = (matrix) => (
    <View>

    </View>
)

const Amenities = (amenity) => (
    <View>

    </View>
)

export default SavedHousing = ({ navigation, route }) => {
    const { house } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={house.logo} />
            </View>
            <View style={styles.midContainer}>
                <View style={styles.connectCotnainer}>

                </View>
                <View style={styles.matrixContainer}>

                </View>
                <View style={styles.amenitiesContainer}>

                </View>
            </View>
            <View style={styles.descriptionContainer}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    midContainer: {
        flex: 1,
        borderColor: 'tomato',
        borderWidth: 1,
    },
    descriptionContainer: {
        flex: 1,
        borderColor: 'tomato',
        borderWidth: 1,
    },
    connectCotnainer: {},
    matrixContainer: {},
    amenitiesContainer: {},
    image: {
        width: '100%',
        height: '95%',
        borderRadius: 20,
    },
})