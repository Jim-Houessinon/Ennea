import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Title, Paragraph, FAB } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../theme';

type TypesScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const TypesScreen: React.FC<TypesScreenProps> = ({ navigation }) => {
  const handleTypePress = (typeNumber: number) => {
    navigation.navigate('TypeDetail', { typeNumber });
  };

  const handleComparePress = () => {
    navigation.navigate('CompareTypes');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Les 9 types de l'ennéagramme</Text>
          <Text style={styles.headerSubtitle}>
            Explorez les différents types de personnalité
          </Text>
        </View>

        <View style={styles.typesGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(typeNumber => (
            <TouchableOpacity
              key={typeNumber}
              style={styles.typeCard}
              onPress={() => handleTypePress(typeNumber)}
            >
              <View style={[styles.typeCircle, { backgroundColor: colors[`type${typeNumber}` as keyof typeof colors] }]}>
                <Text style={styles.typeNumber}>{typeNumber}</Text>
              </View>
              <Text style={styles.typeName}>{getTypeName(typeNumber)}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Card style={styles.infoCard}>
          <Card.Content>
            <Title>Comparer les types</Title>
            <Paragraph>
              Découvrez les interactions entre différents types de personnalité et améliorez 
              vos relations personnelles et professionnelles.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button 
              mode="contained" 
              onPress={handleComparePress}
              style={styles.compareButton}
            >
              Comparer les types
            </Button>
          </Card.Actions>
        </Card>

        <Card style={styles.infoCard}>
          <Card.Content>
            <Title>À propos de l'ennéagramme</Title>
            <Paragraph>
              L'ennéagramme est un modèle de la psyché humaine qui décrit neuf types de personnalité 
              interconnectés et leurs relations. Chaque type a ses propres motivations, peurs et désirs 
              qui influencent son comportement.
            </Paragraph>
            <Paragraph style={styles.paragraph}>
              Les neuf types sont organisés en trois centres :
            </Paragraph>
            <View style={styles.centersList}>
              <View style={styles.centerItem}>
                <View style={[styles.centerDot, { backgroundColor: colors.type8 }]} />
                <Text style={styles.centerText}>
                  <Text style={styles.bold}>Centre instinctif (8, 9, 1) :</Text> Axé sur l'autonomie et le contrôle
                </Text>
              </View>
              <View style={styles.centerItem}>
                <View style={[styles.centerDot, { backgroundColor: colors.type2 }]} />
                <Text style={styles.centerText}>
                  <Text style={styles.bold}>Centre émotionnel (2, 3, 4) :</Text> Axé sur l'image et les relations
                </Text>
              </View>
              <View style={styles.centerItem}>
                <View style={[styles.centerDot, { backgroundColor: colors.type5 }]} />
                <Text style={styles.centerText}>
                  <Text style={styles.bold}>Centre mental (5, 6, 7) :</Text> Axé sur la sécurité et l'anticipation
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>

      <FAB
        style={styles.fab}
        icon="compare"
        onPress={handleComparePress}
        label="Comparer"
      />
    </View>
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
  typesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  },
  typeCard: {
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
  },
  typeCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  typeNumber: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  typeName: {
    textAlign: 'center',
    fontSize: 12,
    height: 40,
  },
  infoCard: {
    margin: 20,
    elevation: 4,
  },
  compareButton: {
    marginTop: 10,
    width: '100%',
  },
  paragraph: {
    marginTop: 10,
  },
  centersList: {
    marginTop: 10,
  },
  centerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  centerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  centerText: {
    flex: 1,
    lineHeight: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.accent,
  },
});

export default TypesScreen;