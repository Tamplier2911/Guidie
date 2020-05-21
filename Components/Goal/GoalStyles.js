import styled from "styled-components/native";

const getCompletedStyle = ({ completed }) =>
  completed ? `text-decoration: line-through` : ``;

const getGoalBgColor = ({ even }) =>
  even ? `background-color: #f4f4f4;` : `background-color: #fff;`;

export const GoalView = styled.View`
  ${getGoalBgColor}
  padding: 6px;
  flex-direction: row;
  align-items: center;
`;

export const GoalText = styled.Text`
  ${getCompletedStyle}
  font-size: 24px;
  text-align: center;
`;

export const GoalButtonWrap = styled.View``;

export const GoalTextWrap = styled.View`
  flex: 1;
`;

export const GoalButton = styled.TouchableOpacity`
  padding: 6px;
`;
