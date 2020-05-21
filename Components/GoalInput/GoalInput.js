import React from "react";

// components
import CustomButton from "../CustomButton/CustomButton";

// sc
import {
  GoalModal,
  GoalInputView,
  GoalInputViewInModal,
  GoalTextInputView,
  GoalTextInput,
  GoalButtonView,
} from "./GoalInputStyles";

const GoalInput = ({
  goal,
  modalVisible,
  actions: { handleInput, setNewGoal, openModal, closeModal },
}) => {
  return modalVisible ? (
    <GoalModal visible={modalVisible} animationType="slide">
      <GoalInputViewInModal>
        <GoalTextInputView>
          <GoalTextInput
            onChangeText={(text) => handleInput(text)}
            value={goal}
            placeholder="Enter your goal"
          />
        </GoalTextInputView>
        <GoalButtonView>
          <CustomButton
            bgc="#333"
            txc="#fff"
            title="ADD"
            icon={true}
            action={() => {
              setNewGoal(goal);
              closeModal();
            }}
          />
        </GoalButtonView>
      </GoalInputViewInModal>
    </GoalModal>
  ) : (
    <GoalInputView>
      <CustomButton
        bgc="#333"
        txc="#fff"
        title="ADD NEW GOAL"
        icon={false}
        action={() => {
          openModal();
        }}
      />
    </GoalInputView>
  );
};

export default GoalInput;
