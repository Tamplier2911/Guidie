import styled from "styled-components/native";

import { ScrollView, FlatList } from "react-native";

export const LayoutContainer = styled.View`
  flex: 1;
  display: flex;
  padding: 20px;
`;

export const LayoutTop = styled(FlatList)`
  flex: 1;
  display: flex;
`;

export const LayoutBot = styled.View`
  height: 10%;
  display: flex;
`;

export const StyledInput = styled.TextInput`
  border-color: #333;
  border-bottom-width: 1px;
  height: 30px;
  margin-bottom: 4px;
`;
