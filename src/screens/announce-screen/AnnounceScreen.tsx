import React, {useState} from 'react';
import {
  AnnounceSafeAreaView,
  TaskNavBar,
  HeaderText,
  FormInput,
  FormField,
  ButtonSubmit,
  ButtonText,
} from './styles';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function AnnounceScreen() {
  const [description, setDescription] = useState<string>();
  const [midia, setMidia] = useState<string>();
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState<string>();
  const [title, setTitle] = useState<string>('');

  const AnnounceRegister = async () => {
    try {
      const Announce = {
        title: title,
        description: description,
        price: price,
      };
    } catch (error) {}
  };

  return (
    <AnnounceSafeAreaView>
      <TaskNavBar>
        <HeaderText>Anunciar</HeaderText>
      </TaskNavBar>
      <KeyboardAvoidingView>
        <FormField>
          <FormInput>
            <TextInput
              placeholder="Titulo"
              onChangeText={setTitle}
              value={title}
            />
          </FormInput>
          <FormInput>
            <TextInput
              placeholder="Descrição"
              onChangeText={setDescription}
              value={description}
            />
          </FormInput>
          <FormInput>
            <TextInput
              placeholder="Valor"
              onChangeText={setPrice}
              value={price}
            />
          </FormInput>
          <ButtonSubmit onPress={AnnounceRegister}>
            <ButtonText>Anunciar</ButtonText>
          </ButtonSubmit>
        </FormField>
      </KeyboardAvoidingView>
    </AnnounceSafeAreaView>
  );
}
