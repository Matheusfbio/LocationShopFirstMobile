import styled from 'styled-components/native';

export const TaskText = styled.Text`
  align-self: center;
  text-align: center;
  font-size: 22px;
  margin: 0 25% 0 40%;
  /* background-color: black; */
`;
export const TaskNavBar = styled.View`
  flex-direction: row;
  /* background-color: black; */
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
