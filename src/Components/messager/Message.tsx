import React, {useEffect} from 'react';
import {
  Animated,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  MessageSign,
  MessageSignDiv,
  MessageSignInButton,
  MessageSignUpButton,
  MessageText,
} from './styles';

GoogleSignin.configure({
  webClientId:
    '670820340972-qabul3ru603lu1kv8eits58qu842spc6.apps.googleusercontent.com',
  offlineAccess: true,
});

async function GoogleSignIn() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

export function Message() {
  useEffect(() => {
    const unsub = auth().onAuthStateChanged(user => {
      if (user) {
        console.log(JSON.stringify(user, null, 2));
      } else {
        console.log('Google sign actived');
      }
    });
    return () => unsub();
  }, []);

  return (
    <SafeAreaView>
      <MessageSign>
        <MessageText>Signin with</MessageText>
        <View>
          <TouchableOpacity onPress={() => GoogleSignIn()}>
            <MessageSignInButton>
              <FontAwesome5 name="google" size={25} color="black" />
              <Text>Sign In with Google</Text>
            </MessageSignInButton>
          </TouchableOpacity>
        </View>
        <MessageSignDiv>
          <Text>__________________</Text>
          <Text>Or</Text>
          <Text>__________________</Text>
        </MessageSignDiv>
        <View />
        <View>
          <TouchableOpacity>
            <MessageSignUpButton>
              <Text>Cadastro</Text>
            </MessageSignUpButton>
          </TouchableOpacity>
        </View>
      </MessageSign>
    </SafeAreaView>
  );
}
