import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { getCensysData, scanURL } from './Constants';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleCensysSearch = async () => {
    try {
      const data = await getCensysData(searchQuery);
      setSearchResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setSearchResult(`Error: ${error.message}`);
    }
  };

  const handleVirusTotalScan = async () => {
    try {
      const data = await scanURL(searchQuery);
      setSearchResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setSearchResult(`Error: ${error.message}`);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your search query"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search Censys" onPress={handleCensysSearch} />
      <Button title="Scan with VirusTotal" onPress={handleVirusTotalScan} />
      <Text>{searchResult}</Text>
    </View>
  );
};

export default SearchScreen;
