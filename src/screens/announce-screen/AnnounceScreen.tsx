import React, {useState} from 'react';
import {
  AnnounceSafeAreaView,
  TaskNavBar,
  HeaderText,
  FormInput,
  FormField,
} from './styles';
import {TextInput, View} from 'react-native';

export default function AnnounceScreen() {
  const [title, setTitle] = useState('');
  return (
    <AnnounceSafeAreaView>
      <TaskNavBar>
        <HeaderText>Anunciar</HeaderText>
      </TaskNavBar>
      <FormField>
        <FormInput>
          <TextInput
            placeholder="Title"
            onChangeText={text => setTitle(text)}
            value={title}
          />
        </FormInput>
        <FormInput>
          <TextInput
            placeholder="Descrição"
            onChangeText={text => setTitle(text)}
            value={title}
          />
        </FormInput>
        <FormInput>
          <TextInput
            placeholder="Valor"
            onChangeText={text => setTitle(text)}
            value={title}
          />
        </FormInput>
      </FormField>
    </AnnounceSafeAreaView>
  );
}
