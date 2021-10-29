import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Options from '../screens/Options';
import AllQuestions from '../components/AllQuestions';
import ShuffleTen from '../components/ShuffleTen';
import Learn from '../components/Learn';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#9bbaf0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({title: 'Home'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({title: 'Signup'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({title: 'Login'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="Options"
        component={Options}
        options={({title: 'Options'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="AllQuestions"
        component={AllQuestions}
        options={({title: 'AllQuestions'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="ShuffleTen"
        component={ShuffleTen}
        options={({title: 'ShuffleTen'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="Learn"
        component={Learn}
        options={({title: 'Learn'}, {headerLeft: null})}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
