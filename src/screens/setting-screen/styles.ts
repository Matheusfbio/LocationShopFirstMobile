import styled from 'styled-components/native';

export const SettingsSafeAreaView = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Container = styled.View`
  margin: 5% 0 0 0;
  padding-top: 2%;
  font-size: 22px;
`;

export const SubContainer = styled.View`
  align-items: start;
  /* padding-left: 6%;
  padding-top: 4%; */
  /* background-color: red; */
`;

export const SettingsText = styled.Text`
  align-self: center;
  margin-top: 5%;
  font-size: 22px;
  color: black;
`;

export const Line = styled.View`
  background-color: black;
  border: 1px solid black;
  margin: 2px 0;
`;
export const Button = styled.View`
  width: 100%;
  padding-top: 2%;
  justify-content: start;
`;

export const FontButton = styled.Text`
  font-size: 16px;
  padding-left: 6%;
  padding-top: 4%;
  padding-bottom: 4%;
  font-family: sans-serif;
`;
export const FontHeader = styled.Text`
  font-size: 14px;
  padding-left: 6%;
  padding-top: 4%;
  font-family: sans-serif;
`;

export const AvatarHeader = styled.View`
  padding-top: 4%;
`;
