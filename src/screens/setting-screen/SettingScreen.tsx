import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import GoogleSignOut from '../../Components/GoogleSignIn/GoogleSignOut';
import Avatar from '../../Components/avatar/avatar';
import { SettingsText } from './styles';

export default function SettingScreen() {
    return (
        <SafeAreaView>
            {/* <Avatar /> */}
            <SettingsText>Setting</SettingsText>
            <GoogleSignOut />
        </SafeAreaView>
    );
}
