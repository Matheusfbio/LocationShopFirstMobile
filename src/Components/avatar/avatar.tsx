import {Image, SafeAreaView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {FieldUser, TaskNavBar} from '../../screens/announce-screen/styles';

export default function Avatar() {
  const [photoURL, setPhotoURL] = useState<string | null>('');
  const [showName, setShowName] = useState<string | null>('');
  const [showEmail, setShowEmail] = useState<string | null>('');

  useEffect(() => {
    function getProfilePhotoURL() {
      const user = auth().currentUser;

      if (user) {
        // Verifica se o usuário tem uma foto de perfil
        if (user.photoURL && user.displayName && user.email) {
          setPhotoURL(user.photoURL);
          setShowName(user.displayName);
          setShowEmail(user.email);
        } else {
          console.log('O usuário não tem uma foto de perfil.');
        }
      } else {
        console.log('Nenhum usuário autenticado.');
      }
    }

    getProfilePhotoURL();
  }, []);

  return (
    <SafeAreaView>
      <TaskNavBar>
        {photoURL ? (
          <Image
            source={{uri: photoURL}}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 65,
              height: 65,
              borderRadius: 45,
            }}
          />
        ) : (
          <Image source={require('./img/NoPhotoProfile.png')} />
        )}
        <FieldUser>
          <Text>{showName}</Text>
          <Text>{showEmail}</Text>
        </FieldUser>
      </TaskNavBar>
    </SafeAreaView>
  );
}
