import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import AboutUs from './AboutUs';

const HomeScreen = ({ navigation }) => {
  const handleNavigateToSearch = () => {
    navigation.navigate('SafePass Search'); // Navigate to the SearchScreen
  };

  const handleNavigateToProfile = () => {
    navigation.navigate('UserProfile'); // Navigate to the UserProfileScreen
  };

  const handleLogout = () => {
    // Perform logout actions
    // For example, clearing user authentication token and redirecting to login screen
    navigation.navigate('Login'); // Navigate to the LoginScreen
  };

  const handleNavigateToAboutUs = () => {
    navigation.navigate('About Us'); // Navigate to the AboutUs screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Welcome! SafePass: Your shield in a digital realm!</Text>
        <Button title="Search" onPress={handleNavigateToSearch} />
        <Button title="User Profile" onPress={handleNavigateToProfile} />
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <View style={styles.footer}>
        <Button title="About Us" onPress={handleNavigateToAboutUs} />
	<Footer title="SafePass Guarantees Your Online Safety" />
        {/* Add more footer elements if needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between', // Arrange content vertically with space between
  },
  content: {
    flex: 1, // Take up available space in the container
    justifyContent: 'flex-start', // Align content at the top
  },
  footer: {
    justifyContent: 'flex-end', // Align content at the bottom
  },
});

export default HomeScreen;
