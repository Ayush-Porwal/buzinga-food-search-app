import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

const Details = ({ route, navigation }) => {

    const { location, highlights, cuisines } = route.params;

    return (
        <View styles = {{ flex: 1 }}>
            <ScrollView>
                <Text style = { styles.Heading }> Restaurant Address </Text>
                <Text style = { styles.addressText }>{ location.address }</Text>
                <Text style = { styles.Heading }> Restaurant Highlights </Text>
                <FlatList 
                    style = { { marginLeft: 10, marginBottom: 10 } }
                    data = { highlights }
                    keyExtractor = { (highlight) => highlight }
                    renderItem = { ({ item }) => {
                        return <Text style = { styles.listTextStyle }>{item}</Text>
                    }}
                    showsVerticalScrollIndicator = { false }
                />
                <Text style = { styles.Heading }> Restaurant Cuisines </Text>
                <FlatList 
                    style = { { marginLeft: 10, marginBottom: 30 } }
                    data = { cuisines }
                    keyExtractor = { (cuisine) => cuisine }
                    renderItem = { ({ item }) => {
                        return <Text style = { styles.listTextStyle }>{item}</Text>
                    }}
                    showsVerticalScrollIndicator = { false }
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 10,
        backgroundColor: 'pink',
    },
    addressText: {
        fontSize: 18,
        textAlign: 'justify',
        margin: 10,
    },
    listTextStyle: {
        fontSize: 18,
        textAlign: 'justify',
    }
});

export default Details;