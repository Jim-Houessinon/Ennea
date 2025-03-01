import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button, Text, Snackbar } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { colors } from '../../theme';

type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    setLoading(true);
    
    // Simulate registration for demo purposes
    setTimeout(() => {
      setLoading(false);
      // For demo, we'll just log in the user
      dispatch(setUser({ userId: '123', email }));
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Inscription</Text>
          <Text style={styles.subtitle}>Créez un compte pour commencer</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            left={<TextInput.Icon icon="email" />}
          />

          <TextInput
            label="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
            style={styles.input}
            right={
              <TextInput.Icon
                icon={secureTextEntry ? 'eye' : 'eye-off'}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              />
            }
            left={<TextInput.Icon icon="lock" />}
          />

          <TextInput
            label="Confirmer le mot de passe"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={confirmSecureTextEntry}
            style={styles.input}
            right={
              <TextInput.Icon
                icon={confirmSecureTextEntry ? 'eye' : 'eye-off'}
                onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}
              />
            }
            left={<TextInput.Icon icon="lock-check" />}
          />

          <Button
            mode="contained"
            onPress={handleRegister}
            style={styles.button}
            contentStyle={styles.buttonContent}
            loading={loading}
            disabled={loading}
          >
            S'inscrire
          </Button>

          <View style={styles.loginContainer}>
            <Text>Vous avez déjà un compte ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>Se connecter</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Snackbar
          visible={!!error}
          onDismiss={() => setError(null)}
          action={{
            label: 'OK',
            onPress: () => setError(null),
          }}
        >
          {error}
        </Snackbar>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text,
  },
  form: {
    width: '100%',
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    borderRadius: 25,
  },
  buttonContent: {
    height: 50,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;