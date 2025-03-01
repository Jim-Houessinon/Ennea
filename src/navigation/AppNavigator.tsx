import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Ionicons } from '@expo/vector-icons';

// Auth Screens
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

// Main Screens
import HomeScreen from '../screens/main/HomeScreen';
import TestsScreen from '../screens/main/TestsScreen';
import TestQuestionScreen from '../screens/main/TestQuestionScreen';
import TestResultScreen from '../screens/main/TestResultScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import TypesScreen from '../screens/main/TypesScreen';
import TypeDetailScreen from '../screens/main/TypeDetailScreen';
import CompareTypesScreen from '../screens/main/CompareTypesScreen';

// Stack Navigators
const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const TestsStack = createNativeStackNavigator();
const TypesStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

// Tab Navigator
const Tab = createBottomTabNavigator();

// Auth Navigator
const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

// Home Stack Navigator
const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Accueil' }} />
  </HomeStack.Navigator>
);

// Tests Stack Navigator
const TestsStackNavigator = () => (
  <TestsStack.Navigator>
    <TestsStack.Screen name="TestsScreen" component={TestsScreen} options={{ title: 'Tests' }} />
    <TestsStack.Screen 
      name="TestQuestion" 
      component={TestQuestionScreen} 
      options={{ title: 'Question', headerBackTitle: 'Retour' }}
    />
    <TestsStack.Screen 
      name="TestResult" 
      component={TestResultScreen} 
      options={{ title: 'Résultats', headerBackTitle: 'Retour' }}
    />
  </TestsStack.Navigator>
);

// Types Stack Navigator
const TypesStackNavigator = () => (
  <TypesStack.Navigator>
    <TypesStack.Screen name="TypesScreen" component={TypesScreen} options={{ title: 'Types' }} />
    <TypesStack.Screen 
      name="TypeDetail" 
      component={TypeDetailScreen} 
      options={({ route }: any) => ({ title: `Type ${route.params?.typeNumber}` })}
    />
    <TypesStack.Screen 
      name="CompareTypes" 
      component={CompareTypesScreen} 
      options={{ title: 'Comparer' }}
    />
  </TypesStack.Navigator>
);

// Profile Stack Navigator
const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profil' }} />
  </ProfileStack.Navigator>
);

// Main Tab Navigator
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Tests') {
          iconName = focused ? 'clipboard' : 'clipboard-outline';
        } else if (route.name === 'Types') {
          iconName = focused ? 'grid' : 'grid-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName as any} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#6A5ACD',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen 
      name="Home" 
      component={HomeStackNavigator} 
      options={{ headerShown: false, title: 'Accueil' }}
    />
    <Tab.Screen 
      name="Tests" 
      component={TestsStackNavigator} 
      options={{ headerShown: false, title: 'Tests' }}
    />
    <Tab.Screen 
      name="Types" 
      component={TypesStackNavigator} 
      options={{ headerShown: false, title: 'Types' }}
    />
    <Tab.Screen 
      name="Profile" 
      component={ProfileStackNavigator} 
      options={{ headerShown: false, title: 'Profil' }}
    />
  </Tab.Navigator>
);

// Main App Navigator
const AppNavigator = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  
  return isAuthenticated ? <TabNavigator /> : <AuthNavigator />;
};

export default AppNavigator;