import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

import auth from '@react-native-firebase/auth';
import {SignOutButton} from './styles';

export default function GoogleSignOut() {
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SignOutButton>
      <TouchableOpacity onPress={() => handleSignOut()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SignOutButton>
  );
}
