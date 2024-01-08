import React from 'react';

import {ImageBackground} from 'react-native';

import {Message} from '../../Components/messager/Message';
import {LoginComponents, LoginContainer, LoginText, LoginTitle} from './styles';

export default function LoginScreen() {
  return (
    <ImageBackground source={require('./img/background-sign.png')}>
      <LoginContainer>
        <LoginComponents>
          <LoginTitle>Location Shop</LoginTitle>
          <LoginText>Where Style and Convenience Meet!</LoginText>
        </LoginComponents>
        <Message />
      </LoginContainer>
    </ImageBackground>
  );
}
