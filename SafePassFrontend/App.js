import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import UserProfileScreen from './UserProfileScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import { StatusBar } from 'expo-status-bar';
import { Screen } from 'react-native-screens'; // Import Screen directly

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing Page">
        <Stack.Screen
          name="Landing Page"
          component={LandingPage}
        />
        <Stack.Screen
          name="About Us"
          component={AboutUs} // Use AboutUs directly, no need for Screen()
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SafePass Search" component={SearchScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

