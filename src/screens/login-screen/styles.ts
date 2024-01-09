import styled from 'styled-components/native';

export const LoginContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const LoginComponents = styled.View`
  align-items: center;
  margin: auto;
  width: 100%;
`;

export const LoginTitle = styled.Text`
  font-size: 42px;
  margin-bottom: -10px;
  margin-top: 20%;
  color: white;
`;

export const LoginText = styled.Text`
  font-size: 15px;
  padding: 15px;
  text-align: center;
  color: white;
`;

export const LoginImg = styled.View`
  padding: 5px;
  margin: 0 0 10% 0;
  border-radius: 9px;
  background-color: black;
`;

export const HomeSafeAreaView = styled.SafeAreaView`
  background-color: white;
`;
