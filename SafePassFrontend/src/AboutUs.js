import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';

const AboutUs = ({ navigation }) => {
  const [aboutUsContent, setAboutUsContent] = useState('');

  useEffect(() => {
    // Fetch the content of the About Us page from GitHub
    fetch('https://raw.githubusercontent.com/olecko/SafePass/main/AboutUs.md')
      .then((response) => response.text())
      .then((data) => setAboutUsContent(data))
      .catch((error) => console.error('Error fetching About Us content:', error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.aboutUsContent}>{aboutUsContent}</Text> {/* Render the fetched content */}
      <Button title="Back" onPress={() => navigation.pop()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  aboutUsContent: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AboutUs;

