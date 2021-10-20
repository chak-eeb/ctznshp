import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Options = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          navigation.navigate('AllQuestions');
        }}>
        <Text style={styles.text}>All Questions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Shuffle 10</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Learn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf7f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    marginVertical: 35,
    paddingVertical: 10,
    width: '70%',
    backgroundColor: '#0077b6',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
});
