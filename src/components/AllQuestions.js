import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {questions} from '../../utils/questions';
import QuestionCard from './QuestionCard';

const AllQuestions = () => {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'space-between',
      }}>
      {questions.map(question => {
        return (
          <View key={question.id} style={{flex:1}}>
            <Text style={styles.title}>{question.category.title}</Text>
            <QuestionCard />
          </View>
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
    </FlatList>
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
  cardContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
