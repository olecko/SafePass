import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
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
      <Button title="Search With Censys" onPress={handleCensysSearch} />
      <Button title="Scan With VirusTotal" onPress={handleVirusTotalScan} />
      <Text>{searchResult}</Text>
      <Text style={styles.footer}>SafePass: <Text style={styles.italic}>Your Shield in a Digital Realm</Text></Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', // Set your desired background color
    padding: 20,
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  italic: {
    fontStyle: 'italic',
  },
});

export default SearchScreen;
