import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Card, Button, Title, Paragraph } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../theme';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const personalityType = useSelector((state: RootState) => state.user.personalityType);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bienvenue sur EnnéaPsych</Text>
        <Text style={styles.subtitleText}>
          Découvrez votre personnalité avec l'ennéagramme
        </Text>
      </View>

      {personalityType ? (
        <Card style={styles.personalityCard}>
          <Card.Content>
            <Title>Votre type de personnalité</Title>
            <View style={styles.typeContainer}>
              <View style={[styles.typeCircle, { backgroundColor: colors[`type${personalityType}` as keyof typeof colors] }]}>
                <Text style={styles.typeNumber}>{personalityType}</Text>
              </View>
              <View style={styles.typeInfo}>
                <Text style={styles.typeName}>
                  {getTypeName(personalityType)}
                </Text>
                <Paragraph>
                  {getTypeShortDescription(personalityType)}
                </Paragraph>
              </View>
            </View>
          </Card.Content>
          <Card.Actions>
            <Button 
              onPress={() => navigation.navigate('Types', { 
                screen: 'TypeDetail', 
                params: { typeNumber: personalityType } 
              })}
            >
              En savoir plus
            </Button>
          </Card.Actions>
        </Card>
      ) : (
        <Card style={styles.card}>
          <Card.Content>
            <Title>Découvrez votre type</Title>
            <Paragraph>
              Passez notre test pour découvrir votre type de personnalité selon l'ennéagramme.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button 
              mode="contained" 
              onPress={() => navigation.navigate('Tests')}
            >
              Faire le test
            </Button>
          </Card.Actions>
        </Card>
      )}

      <Card style={styles.card}>
        <Card.Content>
          <Title>Qu'est-ce que l'ennéagramme ?</Title>
          <Paragraph>
            L'ennéagramme est un modèle de la psyché humaine qui décrit neuf types de personnalité 
            interconnectés et leurs relations. Il offre un cadre pour comprendre les motivations 
            profondes qui guident nos comportements.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('Types')}>
            Explorer les types
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Comparer les types</Title>
          <Paragraph>
            Découvrez les interactions entre différents types de personnalité et améliorez 
            vos relations personnelles et professionnelles.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button 
            onPress={() => navigation.navigate('Types', { 
              screen: 'CompareTypes' 
            })}
          >
            Comparer
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
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitleText: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  card: {
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 4,
  },
  personalityCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 4,
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  typeCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  typeNumber: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  typeInfo: {
    flex: 1,
  },
  typeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default HomeScreen;