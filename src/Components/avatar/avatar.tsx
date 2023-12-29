import {Image, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TaskNavBar} from '../../screens/announce-screen/styles';
import auth from '@react-native-firebase/auth';

export default function Avatar() {
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    function getProfilePhotoURL() {
      const user = auth().currentUser;

      if (user) {
        // Verifica se o usuário tem uma foto de perfil
        if (user.photoURL) {
          setPhotoURL(user.photoURL);
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
              width: 45,
              height: 45,
              borderRadius: 45,
            }}
          />
        ) : (
          <Image source={require('./img/NoPhotoProfile.png')} />
        )}
      </TaskNavBar>
    </SafeAreaView>
  );
}
