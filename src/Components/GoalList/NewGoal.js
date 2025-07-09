import React, { useState } from "react";
import "./NewGoal.css"; // Assuming you have a CSS file for styling
const NewGoal = (props) => {
  const [goal, setGoal] = useState(""); // State to hold the input value
  const addGoalHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!goal.trim()) {
      return; // If the input is empty, do not proceed
    }
    const newGoal = {
      id: Math.random().toString(), // Generate a random ID for the goal
      text: goal, // Get the value of the input field
    }; // Create a new goal object

    setGoal(""); // Clear the input field after submission

    props.onAddGoal(newGoal); // Call the parent component's handler to add the new goal
  };
  const textChangeHandler = (event) => {
    setGoal(event.target.value); // Update the state with the input value
  };
  return (
    <form onSubmit={addGoalHandler} className="new-goal-form">
      <input
        type="text"
        id="goal"
        value={goal} // Bind the input value to the state
        onChange={textChangeHandler} // Update the state on input change
        placeholder="Add New Goal"
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
