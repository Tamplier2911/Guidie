import React, { useContext, useEffect } from "react";

// components
import GoalInput from "../GoalInput/GoalInput";
import Goal from "../Goal/Goal";

// contexts
import GoalsContext from "../../Contexts/GoalsContext";

// sc
import { LayoutContainer, LayoutTop, LayoutBot } from "./LayoutStyles";

const Layout = () => {
  const {
    goal,
    handleInput,
    setInitialGoals,
    allGoals,
    setNewGoal,
    deleteGoal,
    achieveGoal,
    unachieveGoal,
    modalVisible,
    openModal,
    closeModal,
  } = useContext(GoalsContext);

  useEffect(() => {
    setInitialGoals();
  }, []);

  return (
    <LayoutContainer>
      <LayoutTop
        data={allGoals}
        renderItem={(itemData) => {
          const { item, index } = itemData;
          return (
            <Goal
              key={item.id}
              data={item}
              even={index % 2 === 0 ? 1 : 0}
              actions={{ deleteGoal, achieveGoal, unachieveGoal }}
            />
          );
        }}
      />
      <LayoutBot>
        <GoalInput
          goal={goal}
          modalVisible={modalVisible}
          actions={{ handleInput, setNewGoal, openModal, closeModal }}
        />
      </LayoutBot>
    </LayoutContainer>
  );
};

export default Layout;
