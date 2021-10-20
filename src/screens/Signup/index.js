import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Signup = ({navigation}) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoading, setIsLoading] = useState(false);

const handleSignup = () => {
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//      .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     alert(error.message)
//   });
navigation.navigate('Login')
}

 return (
     (isLoading) ? 
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
        :
   
        <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#0077b6"
          title="Signup"
          onPress={handleSignup}
        />

        <Text 
          style={styles.loginText}
          onPress={() => navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>                          
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

export default Signup
