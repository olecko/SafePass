import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Header from './Header';
import InputField from './InputField';
import authService from './authService';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      const newData = { email, username, phoneNumber, password };
      const newUser = await authService.registerUser(newData);
      console.log('New user registered:', newUser);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Sign Up error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="SafePass Sign Up" />
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="Username" value={username} onChangeText={setUserName} />
      <InputField
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <InputField
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SignUpScreen;

