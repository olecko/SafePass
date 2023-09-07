// Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ title }) => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
  },
});

export default Footer;

