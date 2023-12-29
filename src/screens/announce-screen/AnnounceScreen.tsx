import React from 'react';
import {SafeAreaView} from 'react-native';
import {TaskNavBar, TaskText} from './styles';
import Avatar from '../../Components/avatar/avatar';

export default function AnnounceScreen() {
  return (
    <SafeAreaView>
      <TaskNavBar>
        <TaskText>Anunciar</TaskText>
      </TaskNavBar>
      <Avatar />
    </SafeAreaView>
  );
}
