import styled from "styled-components/native";

const getBGColor = ({ bgc }) => `background-color: ${bgc}`;
const getTextColor = ({ txc }) => `color: ${txc}`;

export const ButtonContainer = styled.TouchableOpacity`
  ${getBGColor}
  padding: 12px;
  border-radius: 4px;
  flex-direction: row;
`;

export const ButtonTextView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonTextWrap = styled.Text`
  ${getTextColor}
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin-right: 10px;
`;
