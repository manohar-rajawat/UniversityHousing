import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
                    <TouchableOpacity>
                        <Ionicons name="heart" size={40} color="tomato" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="chatbox-ellipses-outline" size={40} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="phone-square" size={40} color="green" />
                    </TouchableOpacity>
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
    },
    descriptionContainer: {
        flex: 1,
    },
    connectCotnainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    matrixContainer: {
        flex: 1,
        borderColor: 'tomato',
        borderWidth: 1,
    },
    amenitiesContainer: {
        flex: 1,
        borderColor: 'tomato',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '95%',
        borderRadius: 20,
    },
})