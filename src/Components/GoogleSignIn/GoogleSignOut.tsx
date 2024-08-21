import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import auth from '@react-native-firebase/auth';

export default function GoogleSignOut() {
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <TouchableOpacity onPress={() => handleSignOut()}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
}
