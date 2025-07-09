// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import GoalList from "./Components/GoalList/GoalList";
import NewGoal from "./Components/GoalList/NewGoal";

const App = () => {
  const [courseGoals, setCouseGoals] = useState([
    {
      id: "g1",
      text: "Learn React",
    },
    {
      id: "g2",
      text: "Build a Single Page Application",
    },
  ]);

  const addGoalHandler = (newGoal) => {
    // setCouseGoals(courseGoals.concat(newGoal));
    setCouseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  // return React.createElement("h1", {}, "Hello World from React .createElement Method!");
  // return (
  //   <h1 title="This Works">
  //     Hello World <span>from</span> React JSX!
  //   </h1>
  // );
  return (
    <div className="course-goals">
      <h1 title="This Works">Course Goals</h1>
      <NewGoal onAddGoal={addGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return (
//       <h1 title="This Works">
//         Hello World <span>from</span> React Class Component!
//       </h1>
//     );
//   }
// }

export default App;
