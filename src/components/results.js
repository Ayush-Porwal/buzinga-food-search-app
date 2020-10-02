import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { withNavigation } from '@react-navigation/compat';

import ResultCard from './resultCard';

const ResultList = ({ title, data, navigation }) => {
    if(!data.length){
        return null;
    }

    return (
        <View style = { styles.container }>
            <Text style = {styles.titleStyle} > { title } </Text>
            <FlatList
                data = { data }
                horizontal = { true }
                keyExtractor = { (restaurant) => restaurant.id }
                renderItem = { ({ item }) => {
                    return (
                        <TouchableOpacity onPress = { () => navigation.navigate('Details', { 
                                    location: item.restaurant.location,
                                    highlights: item.restaurant.highlights, 
                                    cuisines: item.restaurant.cuisines.split(", "),
                                })
                            }
                        >
                            <ResultCard 
                                data = { item }
                            />
                        </TouchableOpacity>
                    );
                }}
                showsHorizontalScrollIndicator = { false }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },

    titleStyle: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3,
    }
});

export default withNavigation(ResultList);