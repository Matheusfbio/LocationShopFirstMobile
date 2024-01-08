import styled from 'styled-components/native';

export const MessageText = styled.Text`
  font-size: 17px;
  margin: 0 12px 12px 0;
`;

export const MessageSign = styled.View`
  border-radius: 10px;
  border: black solid 2px;
  flex-direction: column;
  margin: auto;
  padding: 25px 70px 30px 70px;
`;

export const MessageSignInButton = styled.View`
  border: black 1px solid;
  flex-direction: row;
  padding: 15px 15px 15px 15px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 12px;
`;
export const MessageSignUpButton = styled.View`
  border: black 1px solid;
  flex-direction: row;
  padding: 20px 20px 20px 20px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 12px;
`;

export const MessageSignDiv = styled.View`
  flex-direction: row;
  padding: 12px;
`;
