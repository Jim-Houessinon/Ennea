import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, ProgressBar, RadioButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { answerQuestion, nextQuestion, previousQuestion, completeTest } from '../../redux/slices/testSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../theme';
import { getTestQuestions } from '../../data/testQuestions';

type TestQuestionScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const TestQuestionScreen: React.FC<TestQuestionScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { currentTest, currentQuestionIndex, answers } = useSelector((state: RootState) => state.test);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    if (!currentTest) {
      navigation.navigate('Tests');
      return;
    }

    // Load questions based on the current test
    const testQuestions = getTestQuestions(currentTest);
    setQuestions(testQuestions);
  }, [currentTest, navigation]);

  useEffect(() => {
    // Set the selected value based on the current answer (if exists)
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const existingAnswer = answers.find(a => a.questionId === currentQuestion.id);
      setSelectedValue(existingAnswer ? existingAnswer.value : null);
    }
  }, [currentQuestionIndex, answers, questions]);

  if (!currentTest || questions.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Chargement...</Text>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / questions.length;

  const handleAnswer = (value: number) => {
    setSelectedValue(value);
    dispatch(answerQuestion({
      questionId: currentQuestion.id,
      value
    }));
  };
}