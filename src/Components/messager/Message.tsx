import React, {useEffect} from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  MessageSign,
  MessageSignDiv,
  MessageSignInButton,
  MessageSignUpButton,
  MessageText,
  MessageTextContainer,
} from './styles';
import SingIn from '../EmailSignin/SingIn';

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

function SignUpAlert() {
  Alert.alert('Aviso', 'Esta função não esta disponivel no momento', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
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
        <MessageTextContainer>Sign in with</MessageTextContainer>
        <View>
          <TouchableOpacity onPress={() => GoogleSignIn()}>
            <MessageSignInButton>
              <FontAwesome5 name="google" size={25} color="black" />
              <MessageText>Sign In with Google</MessageText>
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
              <TouchableOpacity onPress={() => SignUpAlert()}>
                <MessageText>Cadastro</MessageText>
              </TouchableOpacity>
            </MessageSignUpButton>
          </TouchableOpacity>
        </View>
      </MessageSign>
    </SafeAreaView>
  );
}
