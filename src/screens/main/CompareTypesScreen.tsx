import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Title, Paragraph, Divider, List, SegmentedButtons } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { colors } from '../../theme';
import { getTypeData, getTypeComparison } from '../../data/typeData';

type CompareTypesScreenProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { type1?: number; type2?: number } }, 'params'>;
};

const CompareTypesScreen: React.FC<CompareTypesScreenProps> = ({ navigation, route }) => {
  const initialType1 = route.params?.type1 || 1;
  const initialType2 = route.params?.type2 || (initialType1 === 1 ? 2 : 1);

  const [type1, setType1] = useState(initialType1);
  const [type2, setType2] = useState(initialType2);
  const [comparison, setComparison] = useState<any>(null);

  useEffect(() => {
    // Get comparison data
    const comparisonData = getTypeComparison(type1, type2);
    setComparison(comparisonData);
  }, [type1, type2]);

  const typeData1 = getTypeData(type1);
  const typeData2 = getTypeData(type2);

  if (!typeData1 || !typeData2 || !comparison) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Chargement...</Text>
      </View>
    );
  }

  const handleTypeSelect = (typeNumber: number, isFirstType: boolean) => {
    if (isFirstType) {
      if (typeNumber === type2) {
        // Swap types
        setType2(type1);
      }
      setType1(typeNumber);
    } else {
      if (typeNumber === type1) {
        // Swap types
        setType1(type2);
      }
      setType2(typeNumber);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Comparer les types</Text>
        <Text style={styles.headerSubtitle}>
          Découvrez les interactions entre différents types
        </Text>
      </View>

      <Card style={styles.selectionCard}>
        <Card.Content>
          <Title>Sélectionnez les types à comparer</Title>
          
          <View style={styles.typeSelectionContainer}>
            <View style={styles.typeSelection}>
              <Text style={styles.typeSelectionLabel}>Type 1</Text>
              <SegmentedButtons
                value={type1.toString()}
                onValueChange={(value) => handleTypeSelect(parseInt(value), true)}
                buttons={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num
                )
                }
  )
}