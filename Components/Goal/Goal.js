import React from "react";

// rn iconic
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// sc
import {
  GoalView,
  GoalText,
  GoalButton,
  GoalButtonWrap,
  GoalTextWrap,
} from "./GoalStyles";

const Goal = ({
  even,
  data: { goal, completed, id },
  actions: { achieveGoal, deleteGoal, unachieveGoal },
}) => {
  return (
    <GoalView even={even}>
      <GoalButtonWrap>
        <GoalButton onPress={() => deleteGoal(id)} on>
          <Entypo name="cross" size={24} color={completed ? "red" : "black"} />
        </GoalButton>
      </GoalButtonWrap>
      <GoalTextWrap>
        <GoalText completed={completed ? 1 : 0}>{goal}</GoalText>
      </GoalTextWrap>
      <GoalButtonWrap>
        <GoalButton
          onPress={() => (completed ? unachieveGoal(id) : achieveGoal(id))}
        >
          <AntDesign
            name="check"
            size={24}
            color={completed ? "green" : "black"}
          />
        </GoalButton>
      </GoalButtonWrap>
    </GoalView>
  );
};

export default Goal;
