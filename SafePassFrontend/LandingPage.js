// Import necessary modules and components
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

const LandingPage = ({ navigation }) => {
  const handleTrySafePass = () => {
    navigation.navigate('Login'); // Navigate to the LoginScreen when the "Try SafePass" button is pressed
  };

  return (
    <View style={styles.container}>
      {/* Intro Section */}
      <View style={styles.introSection}>
        <Image
          source={require('./icons/home_page.png')}
          style={styles.coverImage}
        />
        <Text style={styles.projectName}>SafePass</Text>
        <Text style={styles.description}>
          SafePass is a security app that empowers users to scan URLs and search domains for potential threats.
        </Text>
        <View style={styles.navigationLinks}>
          <TouchableOpacity>
            <Text style={styles.link}>Features</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://github.com/olecko/SafePass/blob/main/AboutUs.md')}
            >
              About Us
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://github.com/olecko/SafePass')}
            >
              GitHub
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.trySafePassButton}
          onPress={handleTrySafePass}
        >
          <Text style={styles.trySafePassText}>Try SafePass</Text>
        </TouchableOpacity>
      </View>

      {/* Feature Section */}
      <View style={styles.featureSection}>
        {/* Feature 1 */}
        <View style={styles.feature}>
          <Image
            source={require('./icons/search_page.png')}
            style={styles.featureImage}
          />
          <Text style={styles.featureName}>SafePass Search</Text>
          <Text style={styles.featureDescription}>
            Search and scan URLs and domains for potential security threats. This guarantees your safety against malicious websites that might want to steal your sensitive data.
          </Text>
        </View>

        {/* Feature 2 */}
        <View style={styles.feature}>
          <Image
            source={require('./icons/sign_up.png')}
            style={styles.featureImage}
          />
          <Text style={styles.featureName}>SafePass Sign Up</Text>
          <Text style={styles.featureDescription}>
            Easily create a user account to enable you to log in and track your activities such as your search history.
          </Text>
        </View>

        {/* Feature 3 */}
        <View style={styles.feature}>
          <Image
            source={require('./icons/login_screen.png')}
            style={styles.featureImage}
          />
          <Text style={styles.featureName}>Quick Search</Text>
          <Text style={styles.featureDescription}>
            You have the option to quickly open SafePass and search or scan any URL or domain without registration.
          </Text>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutDescription}>
          SafePass was inspired by the increasing threats in the digital world. We wanted to create a tool that empowers users to protect themselves from malicious websites and potential security risks.
        </Text>
        <Text style={styles.timeline}>
          This project started on July 28, 2023, and is still undergoing development, with several milestones achieved.
        </Text>
        <Text style={styles.holbertonPortfolio}>
          This project is a Portfolio Project for Holberton School. Click{' '}
          <Text
            style={styles.holbertonLink}
            onPress={() => Linking.openURL('https://www.alxafrica.com/')}
          >
            Here
          </Text>{' '}
          to visit the school's website.
        </Text>
        <Text style={styles.teamMembers}>Team Members' Links:</Text>
        <Text style={styles.teamMemberLink}>
          a. Paul Emumena Michael -{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.linkedin.com/in/paul-michael-91a43960/')}
          >
            LinkedIn
          </Text>
          ,{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/olecko/')}
          >
            GitHub
          </Text>
          ,{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://twitter.com/RealMc_Paul')}
          >
            Twitter
          </Text>
          .
        </Text>
        <Text style={styles.teamMemberLink}>
          b. Ezana Zeray W/mariam -{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.linkedin.com/in/ezana-zeray79/')}
          >
            LinkedIn
          </Text>
          ,{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/ezana73')}
          >
            GitHub
          </Text>
          .
        </Text>
        <Text style={styles.gitHubRepository}>
          GitHub Repository:{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/olecko/SafePass')}
          >
            https://github.com/olecko/SafePass
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'green', // Set your desired background color
  },
  introSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  projectName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    textAlign: 'center',
    marginVertical: 10,
  },
  navigationLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  link: {
    marginHorizontal: 10,
    color: 'blue',
  },
  trySafePassButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  trySafePassText: {
    color: 'white',
    fontWeight: 'bold',
  },
  featureSection: {
    marginBottom: 20,
  },
  feature: {
    marginBottom: 20,
  },
  featureImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  featureName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  featureDescription: {
    textAlign: 'center',
    marginVertical: 10,
  },
  aboutSection: {
    marginBottom: 20,
  },
  aboutDescription: {
    marginBottom: 10,
  },
  timeline: {
    marginBottom: 10,
  },
  holbertonPortfolio: {
    marginBottom: 10,
  },
  holbertonLink: {
    color: 'red',
  },
  teamMembers: {
    marginBottom: 10,
  },
  teamMemberLink: {
    marginBottom: 5,
  },
  gitHubRepository: {
    marginBottom: 10,
  },
});

export default LandingPage;
