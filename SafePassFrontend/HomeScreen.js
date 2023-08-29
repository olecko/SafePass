import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './Header';

const HomeScreen = ({ navigation }) => {
  const handleNavigateToSearch = () => {
    navigation.navigate('Search'); // Navigate to the SearchScreen
  };

  const handleNavigateToProfile = () => {
    navigation.navigate('Profile'); // Navigate to the UserProfileScreen
  };

  const handleLogout = () => {
    // Perform logout actions
    // For example, clearing user authentication token and redirecting to login screen
    navigation.navigate('Login'); // Navigate to the LoginScreen
  };

  return (
    <View>
      <Text>Welcome! SafePass: Your shield in a digital realm!</Text>
      <Button title="Search" onPress={handleNavigateToSearch} />
      <Button title="User Profile" onPress={handleNavigateToProfile} />
      <Button title="Logout" onPress={handleLogout} />
      <Header title="SafePass Home" />
      {/* Add more components and functionality as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
