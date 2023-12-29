import React, {useRef, useState} from 'react';

import {TouchableOpacity, Image, Animated} from 'react-native';

import {Message} from '../../Components/messager/Message';
import {
  LoginAnimation,
  LoginButtonClose,
  LoginButtonGet,
  LoginComponents,
  LoginContainer,
  LoginImg,
  LoginText,
  LoginTitle,
} from './styles';

export default function LoginScreen() {
  const [show, setShow] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.spring(animation, {
      toValue: show ? 1 : 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LoginContainer>
      <LoginComponents>
        <LoginImg>
          <Image source={require('./img/logo-128.png')} />
        </LoginImg>
        <LoginTitle>My Study Life</LoginTitle>
        <LoginText>
          Create a unique emotional story that describes better than words
        </LoginText>
      </LoginComponents>
      <Animated.View
        style={{
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 5],
                outputRange: [30, 100],
              }),
            },
          ],
        }}>
        <LoginAnimation>
          {show ? (
            <LoginButtonClose>
              <TouchableOpacity
                onPress={() => {
                  setShow(!show);
                  fadeIn();
                }}>
                <LoginText>Close</LoginText>
              </TouchableOpacity>
            </LoginButtonClose>
          ) : (
            <LoginButtonGet>
              <TouchableOpacity
                onPress={() => {
                  setShow(!show);
                  fadeIn();
                }}>
                <LoginText>Get Started</LoginText>
              </TouchableOpacity>
            </LoginButtonGet>
          )}
        </LoginAnimation>
        {show && <Message />}
      </Animated.View>
    </LoginContainer>
  );
}
