import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <LinearGradient colors={['#fad2e1', '#f28482']} style={styles.container}>
      <Image
        source={require('../../../assets/images/ctznshp-logo.png')}
        style={{width: '80%', height: 400}}
        resizeMode="contain"
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signup}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 0.7,
  },
  buttonsContainer: {
    padding: 15,
    width: '85%',
    height: 170,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginVertical: 8,
    fontSize: 20,
    color: 'white',
    fontFamily: 'poppins',
  },
  login: {
    width: 200,
    paddingVertical: 8,
    backgroundColor: '#0077b6',
    alignItems: 'center',
    borderRadius: 30,
  },
  signup: {
    width: 200,
    paddingVertical: 8,
    backgroundColor: '#0077b6',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default Home;
