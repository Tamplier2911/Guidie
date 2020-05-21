import React from "react";
import { AntDesign } from "@expo/vector-icons";

// cs
import {
  ButtonContainer,
  ButtonTextView,
  ButtonTextWrap,
} from "./CustomButtonStyles";

const CustomButton = ({ bgc, txc, title, action, icon }) => {
  return (
    <ButtonContainer bgc={bgc} onPress={() => action()}>
      <ButtonTextView>
        <ButtonTextWrap txc={txc}>{title}</ButtonTextWrap>
        {icon ? <AntDesign name="checkcircleo" size={18} color={txc} /> : null}
      </ButtonTextView>
    </ButtonContainer>
  );
};

export default CustomButton;
