import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
const isAndroid = Platform.OS === "android";
const statusheight = isAndroid ? StatusBar.currentHeight : 0;
export function RestaurantsScreen() {
  const List = styled.View`
    flex: 1;
    background-color: ${(prop) => prop.theme.colors.bg.primary};
    align-items: flex-start;
    justify-content: flex-start;
  `;
  const SearchBar = styled.View`
    padding: ${(prop) => prop.theme.space[3]};
    background-color: ${(prop) => prop.theme.colors.bg.secondary};
    align-items: center;
    justify-content: center;
  `;
  const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${(prop) => prop.theme.colors.bg.primary};
    margin-top: ${statusheight}px;
  `;
  return (
    <Container>
      <SearchBar>
        <Searchbar placeholder="Search" />
      </SearchBar>
      <List>
        <RestaurantInfoCard />
      </List>
    </Container>
  );
}
