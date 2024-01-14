import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 1%;
`;

export const HomeNavBarIcon = styled.View`
  justify-self: center;
`;

export const LocationInfo = styled.View`
  flex-direction: row;
  margin: 0 0 0 2%;
  align-items: center;
`;

export const Category = styled.View`
  flex-direction: row;
  background-color: greenyellow;
  padding: 4%;
  margin: 4% 0 0 2%;
  align-items: center;
  justify-content: space-between;
`;
export const CategoryInfo = styled.View`
  flex-direction: column;
  background-color: green;
  align-items: center;
`;
export const ShowProducts = styled.View`
  flex-direction: row;
  background-color: red;
  margin: 12px 2% 0 2%;
`;
export const HeaderInfo = styled.Text`
  font-size: 18px;
  color: black;
`;
export const ContainerFlatList = styled.View`
  /* background-color: red; */
  border: 2px solid black;
  padding: 20px;
  border-radius: 12px;
  gap: 12px;
  margin: 0 10px auto;
  flex-direction: column;
  align-items: center;
`;
export const ShowFlatList = styled.View`
  padding: 4%;
`;
export const ShowFlatListText = styled.Text`
  color: black;
`;
export const HomeSafeAreaView = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: white;
`;
