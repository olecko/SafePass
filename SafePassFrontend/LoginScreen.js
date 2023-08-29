import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import InputField from './InputField';
import Button from './Button';
import authService from './authService';

// Define the CustomHeader function here, outside of the LoginScreen component
function CustomHeader() {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleHomePress}>
        <Text style={styles.homeIcon}>🏠</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>SafePass Login</Text>
    </View>
  );
}

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const user = await authService.login(username, password);
      console.log('Logged in user:', user);
      // Redirect to HomeScreen or perform other actions upon successful login
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSignUp = () => {
    // Navigate to SignUpScreen
    navigation.navigate('SignUp');
  };

  const handleQuickSearch = () => {
    // Navigate to SearchScreen when the "Quick Search" button is pressed
    navigation.navigate('SafePass Search');
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="SafePass Login" />
      <InputField
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Quick Search" onPress={handleQuickSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  homeIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
  },
});

export default LoginScreen;
