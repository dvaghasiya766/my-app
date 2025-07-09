import React from "react";
const GoalList = (props) => {
  //   console.log("GoalList component rendered", props.goals);
  return (
    <ul className="goal-list">
      {/* <li>Learn React</li>
      <li>Build a Single Page Application</li>
      <li>Understand Components</li>
      <li>Work with State and Props</li> */}
      {props.goals.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </ul>
  );
};

export default GoalList;
// This component renders a list of goals for a React course.
// It uses an unordered list to display each goal as a list item.
// The component can be imported and used in other parts of the application.
