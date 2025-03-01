import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card, Title, Paragraph, Avatar, Divider, List } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { clearUser } from '../../redux/slices/userSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../theme';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { email, personalityType, testResults, isAuthenticated } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(clearUser());
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTestTypeName = (testType: string) => {
    switch (testType) {
      case 'complete': return 'Test complet';
      case 'quick': return 'Test rapide';
      case 'wings': return 'Test des ailes';
      default: return testType;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Icon size={80} icon="account" style={styles.avatar} />
        <Text style={styles.headerTitle}>
          {isAuthenticated ? email : 'Utilisateur anonyme'}
        </Text>
        {personalityType && (
          <View style={styles.typeContainer}>
            <View style={[styles.typeCircle, { backgroundColor: colors[`type${personalityType}` as keyof typeof colors] }]}>
              <Text style={styles.typeNumber}>{personalityType}</Text>
            </View>
            <Text style={styles.typeName}>{getTypeName(personalityType)}</Text>
          </View>
        )}
      </View>

      {personalityType ? (
        <Card style={styles.card}>
          <Card.Content>
            <Title>Votre type de personnalité</Title>
            <Paragraph>
              Vous êtes principalement de type {personalityType} : {getTypeName(personalityType)}.
              Cliquez ci-dessous pour en savoir plus sur votre type.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button 
              onPress={() => navigation.navigate('Types', { 
                screen: 'TypeDetail', 
                params: { typeNumber: personalityType } 
              })}
            >
              Voir les détails
            </Button>
          </Card.Actions>
        </Card>
      ) : (
        <Card style={styles.card}>
          <Card.Content>
            <Title>Découvrez votre type</Title>
            <Paragraph>
              Vous n'avez pas encore passé de test pour déterminer votre type de personnalité.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button 
              mode="contained" 
              onPress={() => navigation.navigate('Tests')}
            >
              Faire un test
            </Button>
          </Card.Actions>
        </Card>
      )}

      {testResults && testResults.length > 0 && (
        <Card style={styles.card}>
          <Card.Content>
            <Title>Historique des tests</Title>
            <List.Section>
              {testResults.map((result, index) => (
                <React.Fragment key={index}>
                  <List.Item
                    title={getTestTypeName(result.testType)}
                    description={formatDate(result.date)}
                    left={props => (
                      <View style={[styles.resultTypeCircle, { backgroundColor: colors[`type${result.results[0].type}` as keyof typeof colors] }]}>
                        <Text style={styles.resultTypeNumber}>{result.results[0].type}</Text>
                      </View>
                    )}
                    right={props => (
                      <Button 
                        compact 
                        onPress={() => navigation.navigate('Types', { 
                          screen: 'TypeDetail', 
                          params: { typeNumber: result.results[0].type } 
                        })}
                      >
                        Voir
                      </Button>
                    )}
                  />
                  {index < testResults.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List.Section>
          </Card.Content>
        </Card>
      )}

      <Card style={styles.card}>
        <Card.Content>
          <Title>Paramètres</Title>
          <List.Section>
            <List.Item
              title="Notifications"
              description="Gérer les notifications"
              left={props => <List.Icon {...props} icon="bell" />}
              onPress={() => {/* Handle notifications settings */}}
            />
            <Divider />
            <List.Item
              title="Confidentialité"
              description="Gérer vos données personnelles"
              left={props => <List.Icon {...props} icon="shield-account" />}
              onPress={() => {/* Handle privacy settings */}}
            />
            <Divider />
            <List.Item
              title="À propos"
              description="Informations sur l'application"
              left={props => <List.Icon {...props} icon="information" />}
              onPress={() => {/* Handle about */}}
            />
          </List.Section>
        </Card.Content>
      </Card>

      {isAuthenticated && (
        <Button 
          mode="outlined" 
          onPress={handleLogout}
          style={styles.logoutButton}
          icon="logout"
        >
          Se déconnecter
        </Button>
      )}
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
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  typeCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  typeNumber: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  typeName: {
    color: 'white',
    fontSize: 14,
  },
  card: {
    margin: 20,
    elevation: 4,
  },
  resultTypeCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  resultTypeNumber: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    margin: 20,
    marginTop: 0,
    borderColor: colors.error,
    borderWidth: 1,
  },
});

export default ProfileScreen;