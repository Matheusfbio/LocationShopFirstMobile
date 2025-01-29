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
  MessageText,
  SignInButton,
  SignUpButton,
  TextContainer,
} from './styles';

GoogleSignin.configure({
  webClientId: config.WEB_CLIENT_ID,
  offlineAccess: true,
  forceCodeForRefreshToken: true, // Força o uso do refresh token
});

async function GoogleSignIn() {
  try {
    console.log('Verificando Google Play Services...');
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    console.log('Serviços do Google Play disponíveis.');

    const {idToken} = await GoogleSignin.signIn();
    console.log('Token obtido:', idToken);

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('Credential obtido:', googleCredential);

    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error('Erro no Google Sign-In:', error.message);
    console.log('Erro completo:', JSON.stringify(error, null, 2)); // Log detalhado do erro
  }
}

const showToastWithGravity = () => {
  ToastAndroid.show('Não está disponível', 2);
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
        <TextContainer>Sign in with</TextContainer>
        <TouchableOpacity onPress={() => GoogleSignIn()}>
          <SignInButton>
            <FontAwesome5 name="google" size={25} color="black" />
            <MessageText>Sign In with Google</MessageText>
          </SignInButton>
        </TouchableOpacity>
        <MessageSignDiv>
          <Text>__________________</Text>
          <Text>Or</Text>
          <Text>__________________</Text>
        </MessageSignDiv>
        <View />
        <View>
          <TouchableOpacity>
            <TouchableOpacity onPress={() => showToastWithGravity()}>
              <SignUpButton>
                <MessageText>Cadastro</MessageText>
              </SignUpButton>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </MessageSign>
    </SafeAreaView>
  );
}
