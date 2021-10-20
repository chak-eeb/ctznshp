import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {questions} from '../../utils/questions';

const AllQuestions = () => {
  return (
    <View style={styles.container}>
      {questions.map(question => {
        return (
          <Text key={question.id} style={styles.title}>
            {question.category.title}
          </Text>
          // {question.category.questions.map(question => {
          //     <View key={question.id}>
          //     <View>
          //     <Text>Question:</Text>
          //     <Text>{question.question}</Text>
          //     </View>
          //     {/* <View>
          //     <Text>Answer:</Text>
          //     {question.answer.map(answer =>{
          //        return <Text>{answer}</Text>
          //     })}
          //     </View> */}
          //     </View>
          // })}
        );
      })}
    </View>
  );
};

export default AllQuestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
});
