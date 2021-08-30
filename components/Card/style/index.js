import styled from 'styled-components/native';

export const StyledCard = styled.View`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;
  padding: 2%;
`;

export const StyledTextWrapper = styled.View`
  display: flex;
  width: 70%;
  padding-left: 2%;
  justify-content: space-between;
`;

export const StyledTitleText = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

export const StyledDescriptionText = styled.Text`
  color: grey;
`;

export const StyledDateText = styled.Text`
  color: #e85d04;
  font-size: 11px;
  font-weight: 700;
  margin: 3px;
`;

export const StyledCardImageWrapper = styled.View`
  background-color: black;
  width: 100px;
  height: 100px;
`;

export const StyledCardImage = styled.Image`
  width: 100%;
  height: 100%;
`;
