import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchResult from '../../../components/SearchResult';
import { AllUniversityList, UniversityByName } from '../../../src/api/API';
const width = Dimensions.get("screen").width

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)


const IconChange = ({ name, clearSearchBox }) => {
    if (name.length) {
        return (
            <TouchableOpacity onPress={() => clearSearchBox()}>
                <Ionicons name="close-outline" size={30} />
            </TouchableOpacity>
        )
    } else {
        return (
            <Ionicons name="search-outline" size={30} />
        )
    }
}

const CancelButton = ({ iscancellable, clearSearchBox }) => {
    if (iscancellable) {
        return (
            <View>
                <Button
                    title="Cancel"
                    onPress={() => {
                        Keyboard.dismiss();
                        clearSearchBox();
                    }} />
            </View>
        )
    }
    return null;
}

const LoadUniversities = async (name, setPredictNameList) => {
    try {
        const response = await fetch(UniversityByName + name);
        if (response.status != 200)
            return
        const json = await response.json()
        if (json.Data) {
            const universities = [];
            json.Data.forEach(({ name, url }) => {
                const university = {
                    "name": name,
                    "logo": url
                }
                universities.push(university)
            })
            setPredictNameList(universities);
        } else {
            setPredictNameList([]);
            return
        }

    } catch (error) {
        console.error(error)
    }
}
const searchUniversity = (name, setUniversityName, setPredictNameList, setIsClicked) => {
    setUniversityName(name);
    if (name.length) {
        (
            async () => {
                LoadUniversities(name, setPredictNameList)
            }
        )();
        setIsClicked(true);
    } else {
        setIsClicked(false);
        setPredictNameList([]);
    }
}

export default SearchHousing = ({ navigation }) => {
    const [universityName, setUniversityName] = useState("");
    const [predictNameList, setPredictNameList] = useState([]);
    const [isClicked, setIsClicked] = useState(false)
    const clearSearchBox = () => {
        setUniversityName("");
        setPredictNameList([]);
        setIsClicked(false);
    }
    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <View style={styles.lookupWrapper}>
                    <View style={styles.textInputWrapper}>
                        <TextInput onChangeText={text => searchUniversity(text, setUniversityName, setPredictNameList, setIsClicked)} value={universityName} style={styles.textInput} placeholder='Search University' placeholderTextColor='tomato' />
                        <IconChange name={universityName} clearSearchBox={clearSearchBox} />
                    </View>
                    <View>
                        <CancelButton iscancellable={isClicked} clearSearchBox={clearSearchBox} />
                    </View>
                </View>
                <View style={styles.resultWrapper}>
                    {
                        predictNameList.length > 0 && universityName.length > 0 &&
                        <SearchResult clearSearchBox={clearSearchBox} predictNameList={predictNameList} />
                    }
                </View>
            </View>
        </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    lookupWrapper: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    resultWrapper: {
        flex: 1,
        marginTop: 5,
    },
    textInputWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#666',
        borderWidth: 1,
        borderRadius: width - 60,
        paddingHorizontal: 10,
    },
    textInput: {
        flex: 1,
        height: 50,
    },
})