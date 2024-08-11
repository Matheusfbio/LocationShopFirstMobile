import styled from 'styled-components/native';

export const AnnounceSafeAreaView = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const HeaderText = styled.Text`
  color: black;
  font-size: 22px;
  text-align: center;
  margin: 2% auto;
  align-items: center;
  background-color: red;
`;

export const FormInput = styled.View`
  margin: 0% 4.5%;
  border: 2px;
  border-radius: 10px;
`;
export const FormField = styled.View`
  gap: 15px;
  padding: 1px;
  /* margin-top: 2%; */
`;

export const ButtonSubmit = styled.TouchableOpacity`
  margin: auto;
  border: 3px;
  padding: 15px;
  border-radius: 10px;
  margin: 0% 4.5%;
  background-color: #020083;
`;

export const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 15px;
`;

export const TaskNavBar = styled.View`
  flex-direction: row;
  width: 80%;
  /* margin-top: 5%; */
  margin-left: 10%;
  align-items: center;
  gap: 5px;
`;
export const FieldUser = styled.View`
  flex-direction: column;
  color: black;
  align-items: start;
  gap: 5px;
`;

export const TaskContent = styled.Text`
  align-self: center;
  flex-direction: column;
  padding: 10%;
  margin: 0 25% auto;
  font-size: 15px;
`;
export const TaskBody = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 12px;
  padding: 2px;
  margin: 5px 10px 10px 10px;
  border: 3px;
`;
export const TaskView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const TaskViewOptions = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  margin: 0 130px 0px 10px;
  padding: 3px;
  border: 3px;
`;
export const TaskCrudBody = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 12px;
  margin: 0px 1px 0px 10px;
  border: 3px;
`;

export const TaskButtonOptions = styled.View`
  margin: 0px 0px 0px -60px;
  padding: 12px;
  border: 3px;
  border-radius: 10px;
`;

export const TaskBodyCrud = styled.View`
  align-items: baseline;
  flex-direction: column;
  border-radius: 12px;
  padding: 5px;
  margin: 5px 10px 10px 10px;
  border: 1px;
`;
export const SelectStatus = styled.View`
  align-items: center;
  justify-items: center;
  flex-direction: column;
  margin: 0px 10px 0px 10px;
`;
export const TaskTextCrud = styled.View`
  flex-direction: column;
  padding: 5px;
  margin: 5px 5px 10px 5px;
`;
