import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

import React, {useState} from 'react';

export default function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('user: ', userCredential);
      });
  }
  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('user: ', userCredential);
      });
  }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={signUp}>
        <Text>Cadastar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
