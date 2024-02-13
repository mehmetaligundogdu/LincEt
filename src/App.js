import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Icon from 'react-navive-vector-icons/MaterialCommunityIcons';

import {Login} from './pages/auth/Login';
import {Sign} from './pages/auth/Sign';
import {Messages} from './components/Card/MessageCard/Messages';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const Auth = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen name="AuthPage" component={Auth} />
        ) : (
          <Stack.Screen
            name="MessagesPage"
            component={Messages}
            options={{
              title: 'Linçle Bakalım',
              headerTintColor: '#6F1E51',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => <Icon />,
            }}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export {App};
