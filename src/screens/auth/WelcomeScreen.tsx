import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../theme';

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>EnnéaPsych</Text>
            <Text style={styles.tagline}>Découvrez votre personnalité</Text>
          </View>
          
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              style={styles.button}
              contentStyle={styles.buttonContent}
              onPress={() => navigation.navigate('Login')}
            >
              Se connecter
            </Button>
            
            <Button
              mode="outlined"
              style={[styles.button, styles.registerButton]}
              contentStyle={styles.buttonContent}
              onPress={() => navigation.navigate('Register')}
            >
              S'inscrire
            </Button>
            
            <Button
              mode="text"
              onPress={() => navigation.navigate('HomeScreen')}
              style={styles.skipButton}
            >
              Continuer sans compte
            </Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 50,
  },
  button: {
    marginVertical: 10,
    borderRadius: 25,
  },
  buttonContent: {
    height: 50,
  },
  registerButton: {
    borderColor: 'white',
    borderWidth: 2,
  },
  skipButton: {
    marginTop: 20,
  },
});

export default WelcomeScreen;