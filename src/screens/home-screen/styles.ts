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
export const ShowCarousel = styled.View`
  flex-direction: row;
  padding: 4%;
  align-items: center;
  justify-content: space-between;
`;
export const HomeSafeAreaView = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: white;
`;
