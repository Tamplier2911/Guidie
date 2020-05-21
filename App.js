import React from "react";

// components
import Layout from "./Components/Layout/Layout";

// contexts
import { GoalsStore } from "./Contexts/GoalsContext";

export default function App() {
  return (
    <GoalsStore>
      <Layout />
    </GoalsStore>
  );
}
