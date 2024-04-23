import React from 'react';
import GoogleSignOut from '../../Components/GoogleSignIn/GoogleSignOut';
import {SettingsSafeAreaView, SettingsText} from './styles';
import Avatar from '../../Components/avatar/avatar';
import {Text} from 'react-native';

export default function SettingScreen() {
  return (
    <SettingsSafeAreaView>
      <SettingsText>Profile</SettingsText>
      {/* <Avatar /> */}
      <GoogleSignOut />
    </SettingsSafeAreaView>
  );
}
