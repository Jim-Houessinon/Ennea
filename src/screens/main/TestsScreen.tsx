import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { startTest } from '../../redux/slices/testSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../theme';

type TestsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const TestsScreen: React.FC<TestsScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleStartTest = (testId: string) => {
    dispatch(startTest(testId));
    navigation.navigate('TestQuestion');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tests de personnalité</Text>
        <Text style={styles.headerSubtitle}>
          Découvrez votre type selon l'ennéagramme
        </Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Test complet de l'ennéagramme</Title>
          <Paragraph>
            Ce test complet vous aidera à déterminer votre type de personnalité principal 
            selon l'ennéagramme. Il contient 90 questions et prend environ 15-20 minutes.
          </Paragraph>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>90</Text>
              <Text style={styles.infoLabel}>Questions</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>20</Text>
              <Text style={styles.infoLabel}>Minutes</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>Précis</Text>
              <Text style={styles.infoLabel}>Résultat</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode="contained" 
            onPress={() => handleStartTest('complete')}
            style={styles.button}
          >
            Commencer
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Test rapide de l'ennéagramme</Title>
          <Paragraph>
            Ce test court vous donnera une première indication de votre type de personnalité. 
            Il contient 36 questions et prend environ 5-7 minutes.
          </Paragraph>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>36</Text>
              <Text style={styles.infoLabel}>Questions</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>7</Text>
              <Text style={styles.infoLabel}>Minutes</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>Rapide</Text>
              <Text style={styles.infoLabel}>Résultat</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode="contained" 
            onPress={() => handleStartTest('quick')}
            style={styles.button}
          >
            Commencer
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Test des ailes</Title>
          <Paragraph>
            Si vous connaissez déjà votre type principal, ce test vous aidera à déterminer 
            votre aile dominante. Il contient 18 questions et prend environ 3-5 minutes.
          </Paragraph>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>18</Text>
              <Text style={styles.infoLabel}>Questions</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>5</Text>
              <Text style={styles.infoLabel}>Minutes</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>Ailes</Text>
              <Text style={styles.infoLabel}>Focus</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode="contained" 
            onPress={() => handleStartTest('wings')}
            style={styles.button}
          >
            Commencer
          </Button>
        </Card.Actions>
      </Card>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>À propos des tests</Text>
        <Text style={styles.infoText}>
          Nos tests sont basés sur des recherches approfondies sur l'ennéagramme et la psychologie 
          de la personnalité. Pour des résultats optimaux, répondez honnêtement aux questions en 
          fonction de comment vous êtes réellement, et non de comment vous aimeriez être.
        </Text>
      </View>
    </ScrollView>
  );
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
  card: {
    margin: 20,
    elevation: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
  infoSection: {
    margin: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    lineHeight: 20,
  },
});

export default TestsScreen;