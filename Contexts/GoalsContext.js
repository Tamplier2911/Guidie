import React, { createContext, useState } from "react";

// utils
import { genId } from "../Utils/genId";
import { storeData, getData } from "../Utils/asyncStorage";

const Context = createContext({});

export const GoalsStore = ({ children }) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const [goal, setGoal] = useState("");
  const [allGoals, setAllGoals] = useState([]);

  const handleInput = (text) => {
    setGoal(text);
  };

  const setInitialGoals = async () => {
    const goals = await getData();
    setAllGoals(() => [...goals]);
  };

  const setNewGoal = () => {
    if (goal) {
      setAllGoals((allGoals) => {
        const newGoalsState = [
          ...allGoals,
          { id: genId(), goal: goal, completed: false },
        ];
        storeData(newGoalsState);
        return newGoalsState;
      });
    }
    setGoal("");
  };

  const deleteGoal = (goalId) => {
    setAllGoals((allGoals) => {
      const newGoalsState = allGoals.filter((goal) => goal.id !== goalId);
      storeData(newGoalsState);
      return newGoalsState;
    });
  };

  const achieveGoal = (goalId) => {
    setAllGoals((allGoals) => {
      const indexOfGoalToUpdate = allGoals.findIndex(
        (goal) => goal.id === goalId
      );
      allGoals[indexOfGoalToUpdate].completed = true;
      storeData(allGoals);
      return [...allGoals];
    });
  };

  const unachieveGoal = (goalId) => {
    setAllGoals((allGoals) => {
      const indexOfGoalToUpdate = allGoals.findIndex(
        (goal) => goal.id === goalId
      );
      allGoals[indexOfGoalToUpdate].completed = false;
      storeData(allGoals);
      return [...allGoals];
    });
  };

  const openModal = () => setmodalVisible(() => true);
  const closeModal = () => setmodalVisible(() => false);

  return (
    <Context.Provider
      value={{
        goal,
        setInitialGoals,
        setGoal,
        handleInput,
        allGoals,
        setNewGoal,
        deleteGoal,
        achieveGoal,
        unachieveGoal,
        modalVisible,
        openModal,
        closeModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
