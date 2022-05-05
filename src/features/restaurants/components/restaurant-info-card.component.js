import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Card, Title, Text, Image } from "react-native-paper";
import star from "../../../../assets/star";
import open from "../../../../assets/isOpenNow";
export const RestaurantInfoCard = ({ Restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon = "https://cdn3.vectorstock.com/i/1000x1000/90/82/icon-spoon-fork-and-knife-on-dining-table-vector-21289082.jpg",
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/15/7c/3c/b1/dining-room.jpg",
    ],
    address = "some rndom street 100",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = Restaurant;
  const RestaurantTitle = styled(Title)`
    font-family: ${(prop) => prop.theme.fonts.heading};
    font-size: ${(prop) => prop.theme.fontSizes.body};
  `;
  const Info = styled(Card.Content)`
    padding: ${(prop) => prop.theme.space[3]};
  `;
  const RestaurantCoverImage = styled(Card.Cover)`
    padding: ${(prop) => prop.theme.space[4]};
    background-color: ${(prop) => prop.theme.colors.bg.primary};
  `;
  const RestaurantCard = styled(Card)`
    background-color: ${(prop) => prop.theme.colors.bg.primary};
  `;
  const Address = styled(Title)`
    font-family: ${(prop) => prop.theme.fonts.body};
    font-size: ${(prop) => prop.theme.fontSizes.caption};
  `;
  const RatingRow = styled.View`
    flex-direction: row;
    justify-content: flex-start;
  `;
  const OpenRow = styled.View`
    flex-direction: row;
    justify-content: center;
    padding-top: ${(prop) => prop.theme.space[1]};
    padding-bottom: ${(prop) => prop.theme.space[1]};
  `;
  const OpenNow = styled.View`
    flex-direction: row;
    justify-content: flex-end;
  `;
  const TextClosed = styled(Text)`
    color: ${(prop) => prop.theme.colors.text.error};
    font-family: ${(prop) => prop.theme.fonts.body};
    font-size: ${(prop) => prop.theme.fontSizes.caption};
  `;
  const TemporarilyClosedRow = styled.View`
    flex-direction: row;
    justify-content: flex-end;
  `;
  const Icon = styled(Image)`
    height: ${(prop) => prop.theme.sizes[6]};
    width: ${(prop) => prop.theme.sizes[6]};
  `;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCoverImage key={name} source={{ uri: photos[0] }} />
      <Info>
        <RestaurantTitle> {name} </RestaurantTitle>
        <OpenRow>
          <RatingRow>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </RatingRow>
          <TemporarilyClosedRow>
            {isClosedTemporarily && (
              <TextClosed> Closed Temporarily!</TextClosed>
            )}
            <Icon source={{ uri: icon }} />
          </TemporarilyClosedRow>
          <OpenNow>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </OpenNow>
        </OpenRow>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
