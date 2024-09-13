import auth from '@react-native-firebase/auth';
import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import Avatar from '../../Components/avatar/avatar';
import {
  AvatarHeader,
  Button,
  Container,
  FontButton,
  FontHeader,
  Line,
  SettingsSafeAreaView,
  SubContainer,
} from './styles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function SettingScreen() {
  async function SignOutAndRevoke() {
    try {
      // Verifique se o usuário está autenticado
      const user = auth().currentUser;
      if (!user) {
        throw new Error('No user is currently signed in.');
      }

      // Primeiro, faça o logout do Firebase
      await auth().signOut();
      // Em seguida, revogue o acesso do Google Sign-In
      await GoogleSignin.revokeAccess();
      console.log('User signed out and access revoked');
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  }

  return (
    <SettingsSafeAreaView>
      <ScrollView>
        <AvatarHeader>
          <Avatar />
        </AvatarHeader>
        <Container>
          <Line />
          <SubContainer>
            <FontHeader>
              <Text>Geral</Text>
            </FontHeader>
            <Button>
              <TouchableOpacity>
                <FontButton>
                  <Text>Editar Perfil</Text>
                </FontButton>
              </TouchableOpacity>
            </Button>
            <Line />
            <Button>
              <TouchableOpacity>
                <FontButton>
                  <Text>Notificações</Text>
                </FontButton>
              </TouchableOpacity>
            </Button>
            <Line />
            <Button>
              <TouchableOpacity>
                <FontButton>
                  <Text>Lista de desejos</Text>
                </FontButton>
              </TouchableOpacity>
            </Button>
            <Line />
            <FontHeader>
              <Text>Legal</Text>
            </FontHeader>
            <Button>
              <TouchableOpacity>
                <FontButton>
                  <Text>Termos de uso</Text>
                </FontButton>
              </TouchableOpacity>
            </Button>
            <Line />
            <Button>
              <TouchableOpacity>
                <FontButton>
                  <Text>Politicas de privacidade</Text>
                </FontButton>
              </TouchableOpacity>
            </Button>
            <Line />
            <FontHeader>
              <Text>Pessoal</Text>
            </FontHeader>
            <Button>
              <TouchableOpacity>
                <FontButton>
                  <Text>Repostar um problema</Text>
                </FontButton>
              </TouchableOpacity>
            </Button>
            <Line />
            <Button>
              <TouchableOpacity onPress={() => SignOutAndRevoke()}>
                <FontButton>
                  <Text>Logout</Text>
                </FontButton>
              </TouchableOpacity>
            </Button>
          </SubContainer>
          <Line />
        </Container>
      </ScrollView>
    </SettingsSafeAreaView>
  );
}
