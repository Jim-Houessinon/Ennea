import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Title, Paragraph, List, Divider, Chip } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { colors } from '../../theme';
import { getTypeData } from '../../data/typeData';

type TypeDetailScreenProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { typeNumber: number } }, 'params'>;
};

const TypeDetailScreen: React.FC<TypeDetailScreenProps> = ({ navigation, route }) => {
  const { typeNumber } = route.params;
  const typeData = getTypeData(typeNumber);

  if (!typeData) {
    return (
      <View style={styles.errorContainer}>
        <Text>Type non trouvé</Text>
      </View>
    );
  }

  const handleComparePress = (otherType: number) => {
    navigation.navigate('CompareTypes', { 
      type1: typeNumber,
      type2: otherType
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { backgroundColor: colors[`type${typeNumber}` as keyof typeof colors] }]}>
        <View style={styles.typeCircle}>
          <Text style={styles.typeNumber}>{typeNumber}</Text>
        </View>
        <Text style={styles.typeName}>{typeData.name}</Text>
        <Text style={styles.typeAlias}>{typeData.alias}</Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Aperçu</Title>
          <Paragraph style={styles.paragraph}>
            {typeData.overview}
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Caractéristiques principales</Title>
          <List.Section>
            {typeData.keyTraits.map((trait, index) => (
              <React.Fragment key={index}>
                <List.Item
                  title={trait}
                  left={props => <List.Icon {...props} icon="check-circle" color={colors[`type${typeNumber}` as keyof typeof colors]} />}
                />
                {index < typeData.keyTraits.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List.Section>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Motivations et peurs</Title>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Motivations de base :</Text>
            <Paragraph style={styles.paragraph}>
              {typeData.basicDesire}
            </Paragraph>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Peurs fondamentales :</Text>
            <Paragraph style={styles.paragraph}>
              {typeData.basicFear}
            </Paragraph>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>En bonne santé vs. en difficulté</Title>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>En bonne santé :</Text>
            <List.Section>
              {typeData.healthy.map((trait, index) => (
                <List.Item
                  key={index}
                  title={trait}
                  left={props => <List.Icon {...props} icon="plus-circle" color="green" />}
                />
              ))}
            </List.Section>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>En difficulté :</Text>
            <List.Section>
              {typeData.unhealthy.map((trait, index) => (
                <List.Item
                  key={index}
                  title={trait}
                  left={props => <List.Icon {...props} icon="minus-circle" color="red" />}
                />
              ))}
            </List.Section>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Ailes</Title>
          <Paragraph style={styles.paragraph}>
            Les ailes sont les types adjacents qui peuvent influencer votre personnalité.
          </Paragraph>
          <View style={styles.wingsContainer}>
            {typeData.wings.map(wing => (
              <Card key={wing.number} style={styles.wingCard}>
                <Card.Content>
                  <View style={styles.wingHeader}>
                    <View style={[styles.smallTypeCircle, { backgroundColor: colors[`type${wing.number}` as keyof typeof colors] }]}>
                      <Text style={styles.smallTypeNumber}>{wing.number}</Text>
                    </View>
                    <Text style={styles.wingTitle}>Type {typeNumber}w{wing.number}</Text>
                  </View>
                  <Paragraph style={styles.wingDescription}>
                    {wing.description}
                  </Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button 
                    onPress={() => navigation.navigate('TypeDetail', { typeNumber: wing.number })}
                  >
                    Voir le type {wing.number}
                  </Button>
                </Card.Actions>
              </Card>
            ))}
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Relations avec les autres types</Title>
          <Paragraph style={styles.paragraph}>
            Explorez comment le type {typeNumber} interagit avec les autres types de personnalité.
          </Paragraph>
          <View style={styles.relationsContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].filter(t => t !== typeNumber).map(otherType => (
              <Chip
                key={otherType}
                style={[styles.relationChip, { backgroundColor: colors[`type${otherType}` as keyof typeof colors] + '30' }]}
                textStyle={{ color: colors[`type${otherType}` as keyof typeof colors] }}
                onPress={() => handleComparePress(otherType)}
              >
                Type {otherType}
              </Chip>
            ))}
          </View>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('CompareTypes', { type1: typeNumber })}
            style={styles.compareButton}
          >
            Comparer avec d'autres types
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Conseils de développement</Title>
          <List.Section>
            {typeData.growthTips.map((tip, index) => (
              <List.Item
                key={index}
                title={tip}
                left={props => <List.Icon {...props} icon="lightbulb-on" color={colors[`type${typeNumber}` as keyof typeof colors]} />}
              />
            ))}
          </List.Section>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  typeCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  typeNumber: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  typeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  typeAlias: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  card: {
    margin: 20,
    marginTop: 10,
    elevation: 4,
  },
  paragraph: {
    lineHeight: 22,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  wingsContainer: {
    marginTop: 15,
  },
  wingCard: {
    marginBottom: 15,
    elevation: 2,
  },
  wingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  smallTypeCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  smallTypeNumber: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  wingDescription: {
    fontSize: 14,
  },
  relationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  relationChip: {
    margin: 5,
  },
  compareButton: {
    marginTop: 10,
    width: '100%',
  },
});

export default TypeDetailScreen;