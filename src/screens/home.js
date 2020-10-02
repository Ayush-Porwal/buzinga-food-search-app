import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import useApi from '../hooks/useApi';

import SearchBar from '../components/searchBar';
import ResultList from '../components/results';

const Home = () => {    
    const [searchText, setSearchText] = useState('');
    const [queryAPI, errorMsg, apiResult] = useApi();

    const filterResultsByPriceRange = (priceRange) => {
        return apiResult.filter( result => {
            return result.restaurant.price_range === priceRange;
        })
    };

    return (
        <View style = { {flex: 1} }>
            <SearchBar
                searchText = { searchText }
                onSearchTextChange = { (newSearchText) => setSearchText(newSearchText) }
                onSeachTextSubmit = { () => queryAPI(searchText) }
            />
            { errorMsg ? <Text> {errorMsg} </Text> : null}
            <ScrollView>
                <ResultList
                    title = 'Prices : Low'
                    data = {filterResultsByPriceRange(1)}
                />
                <ResultList
                    title = 'Prices : Medium'
                    data = {filterResultsByPriceRange(2)}
                />
                <ResultList
                    title = 'Prices : High'
                    data = {filterResultsByPriceRange(3).concat(filterResultsByPriceRange(4))}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});

export default Home;