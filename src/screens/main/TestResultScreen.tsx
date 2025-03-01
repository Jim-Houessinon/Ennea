import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { resetTest } from '../../redux/slices/testSlice';
import { setPersonalityType, addTestResult } from '../../redux/slices/userSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../theme';

type TestResultScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const TestResultScreen: React.FC<TestResultScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { results, currentTest } = useSelector((state: RootState) => state.test);
  const userId = useSelector((state: RootState) => state.user.userId);

  if (!results || results.length === 0) {
    navigation.navigate('Tests');
    return null;
  }

  // Get the top 3 types
  const topTypes = results.slice(0, 3);
  const primaryType = topTypes[0].type;

  const handleSaveResults = () => {
    // Save the primary type to the user profile
    dispatch(setPersonalityType(primaryType));
    
    // Save the test results
    if (userId) {
      dispatch(addTestResult({
        date: new Date().toISOString(),
        testType: currentTest,
        results: topTypes,
      }));
    }
    
    // Navigate to the type detail screen
    navigation.navigate('Types', {
      screen: 'TypeDetail',
      params: { typeNumber: primaryType }
    });
  };

  const handleRetakeTest = () => {
    dispatch(resetTest());
    navigation.navigate('Tests');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vos résultats</Text>
        <Text style={styles.headerSubtitle}>
          Découvrez votre type de personnalité
        </Text>
      </View>

      <Card style={styles.resultCard}>
        <Card.Content>
          <Title style={styles.resultTitle}>Votre type principal</Title>
          <View style={styles.primaryTypeContainer}>
            <View style={[styles.typeCircle, { backgroundColor: colors[`type${primaryType}` as keyof typeof colors] }]}>
              <Text style={styles.typeNumber}>{primaryType}</Text>
            </View>
            <View style={styles.typeInfo}>
              <Text style={styles.typeName}>{getTypeName(primaryType)}</Text>
              <Paragraph style={styles.typeDescription}>
                {getTypeShortDescription(primaryType)}
              </Paragraph>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Vos trois types dominants</Title>
          <Paragraph style={styles.infoText}>
            L'ennéagramme est nuancé, et vous pouvez avoir des traits de plusieurs types.
            Voici vos trois types les plus marqués :
          </Paragraph>

          {topTypes.map((typeResult, index) => (
            <View key={typeResult.type}>
              <View style={styles.typeResultRow}>
                <View style={[styles.smallTypeCircle, { backgroundColor: colors[`type${typeResult.type}` as keyof typeof colors] }]}>
                  <Text style={styles.smallTypeNumber}>{typeResult.type}</Text>
                </View>
                <View style={styles.typeResultInfo}>
                  <Text style={styles.typeResultName}>{getTypeName(typeResult.type)}</Text>
                  <View style={styles.scoreBarContainer}>
                    <View 
                      style={[
                        styles.scoreBar, 
                        { width: `${(typeResult.score / getMaxPossibleScore()) * 100}%` }
                      ]} 
                    />
                  </View>
                </View>
              </View>
              {index < topTypes.length - 1 && <Divider style={styles.divider} />}
            </View>
          ))}
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Que faire maintenant ?</Title>
          <Paragraph style={styles.infoText}>
            Vous pouvez enregistrer vos résultats pour y accéder plus tard, explorer les détails de votre type, 
            ou refaire le test si vous n'êtes pas sûr des résultats.
          </Paragraph>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button 
            mode="contained" 
            onPress={handleSaveResults}
            style={styles.button}
          >
            Enregistrer et explorer
          </Button>
          <Button 
            mode="outlined" 
            onPress={handleRetakeTest}
            style={styles.button}
          >
            Refaire le test
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const getTypeName = (type: number): string => {
  const typeNames = [
    '',
    'Le Perfectionniste',
    'L'Altruiste',
    'Le Battant',
    'Le Romantique',
    'L'Observateur',
    'Le Loyal',
    'L'Épicurien',
    'Le Chef',
    'Le Médiateur'
  ];
  return typeNames[type] || '';
};

const getTypeShortDescription = (type: number): string => {
  const descriptions = [
    '',
    'Rationnel, idéaliste, à principes, déterminé, perfectionniste et éthique.',
    'Attentionné, généreux, possessif, flatteur, manipulateur et sentimental.',
    'Adaptable, ambitieux, image-conscient, pragmatique et orienté vers le succès.',
    'Expressif, dramatique, individualiste, créatif et introspectif.',
    'Perceptif, innovant, secret, isolé et perspicace.',
    'Engagé, responsable, anxieux, suspicieux et fidèle.',
    'Enthousiaste, spontané, versatile, dispersé et optimiste.',
    'Confiant, décisif, confrontant, protecteur et assertif.',
    'Réceptif, apaisant, complaisant, résistant passivement et accommodant.'
  ];
  return descriptions[type] || '';
};

const getMaxPossibleScore = (): number => {
  // This is a simplified calculation - in a real app, you'd calculate this based on the actual test
  return 50; // Example value
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  resultCard: {
    margin: 20,
    elevation: 4,
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
  },
  resultTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  primaryTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  typeNumber: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  typeInfo: {
    flex: 1,
  },
  typeName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  typeDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    margin: 20,
    elevation: 4,
  },
  infoText: {
    marginBottom: 15,
    lineHeight: 20,
  },
  typeResultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  smallTypeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  smallTypeNumber: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  typeResultInfo: {
    flex: 1,
  },
  typeResultName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  scoreBarContainer: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  scoreBar: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  divider: {
    marginVertical: 10,
  },
  cardActions: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  button: {
    marginTop: 10,
  },
});

export default TestResultScreen;