import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [ searchApi, results, errorMessage ] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View>
            <SearchBar term={term} 
            onTermSubmit={() => searchApi(term)}
            onTermChange={setTerm} />
            {errorMessage ? (<Text>{errorMessage}</Text>) : null}
            <Text>Found {results.length} results</Text>
            <ResultsList title="Affordable" results={filterResultsByPrice('$')}/>
            <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')}/>
            <ResultsList title="Expensive" results={filterResultsByPrice('$$$')}/>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default SearchScreen;
