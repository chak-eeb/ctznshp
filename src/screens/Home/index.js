import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
const toSignup = () =>{
  navigation.navigate('Signup');
}

const toLogin = () =>{
  navigation.navigate('Login')
}

  return (
    <LinearGradient colors={['#fbfff1', '#fbf7f1']} style={styles.container}>
      <Image
        source={require('../../../assets/images/ctznshp-logo.png')}
        style={{width: '100%', height: 400}}
        resizeMode="contain"
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.login} onPress={toLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.signup} onPress={toSignup}>
          <Text style={styles.text}>Signup</Text>
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
    marginBottom:20,
    width: '95%',
    height: 170,
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  text: {
    marginVertical: 8,
    fontSize: 24,
    color: '#1d4166',
    fontFamily: 'poppins',
  },
  login: { 
     width: "100%",
    paddingVertical: 8,
    backgroundColor: '#9bbaf0',
    alignItems: 'center',
    borderRadius: 5,
  },
  signup: { 
    width: '100%',
    paddingVertical: 8,
    backgroundColor: '#9bbaf0',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Home;
