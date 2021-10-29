import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const QuestionCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Question:</Text>
        <Text style={styles.question}>question content</Text>
        <Text style={styles.title}>Answer:</Text>
        <Text style={styles.answer}>Answer content</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Show answer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginVertical: 10,
    width: '90%',
    height: 400,
  },
  title: {
    marginVertical: 5,
    fontSize: 15,
  },
  question: {
    marginVertical: 5,
    textAlign: 'center',
  },
  answer: {
    marginVertical: 5,
    textAlign: 'center',
  },
  button: {},
  buttonText: {},
});
