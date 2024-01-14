import React, {useEffect} from 'react';
import config from '../../../config/configEnv';
import {
  SafeAreaView,
  Text,
  ToastAndroid,
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
  MessageTextContainer,
} from './styles';

GoogleSignin.configure({
  webClientId: config.WEB_CLIENT_ID,
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

const showToastWithGravity = () => {
  ToastAndroid.show('Não esta disponivel', 2);
};

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
            <TouchableOpacity onPress={() => showToastWithGravity()}>
              <MessageSignUpButton>
                <MessageText>Cadastro</MessageText>
              </MessageSignUpButton>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </MessageSign>
    </SafeAreaView>
  );
}
