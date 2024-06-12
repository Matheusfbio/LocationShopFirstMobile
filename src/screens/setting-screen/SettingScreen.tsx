import React, {useEffect, useId, useState} from 'react';
import GoogleSignOut from '../../Components/GoogleSignIn/GoogleSignOut';
import {Container, SettingsSafeAreaView, SettingsText} from './styles';
import Avatar from '../../Components/avatar/avatar';
import auth from '@react-native-firebase/auth';
import {Text, View} from 'react-native';

export default function SettingScreen() {
  const [showName, setShowName] = useState<string | null>('');
  const [showEmail, setShowEmail] = useState<string | null>('');

  useEffect(() => {
    function getProfile() {
      const user = auth().currentUser;

      if (user) {
        // Verifica se o usuário tem uma foto de perfil
        if (user.displayName && user.email) {
          setShowName(user.displayName);
          setShowEmail(user.email);
        } else {
          console.log('O usuário não tem uma foto de perfil.');
        }
      } else {
        console.log('Nenhum usuário autenticado.');
      }
    }

    getProfile();
  }, []);

  return (
    <SettingsSafeAreaView>
      <SettingsText>Profile</SettingsText>
      <Avatar />
      <Container>
        <Text>General</Text>
        <Text>legal</Text>
        <Text>Personal</Text>
      </Container>
    </SettingsSafeAreaView>
  );
}
