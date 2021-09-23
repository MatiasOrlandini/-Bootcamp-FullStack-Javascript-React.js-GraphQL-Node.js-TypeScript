import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const total = {
    name: "Number of exercises",
  };

  const sum = course.parts.reduce((total, meal) => total + meal.exercises, 0);

  const Total = (props) => {
    return (
      <p>
        {total.name} {sum}
      </p>
    );
  };

  const Content = (props) => {
    return (
      <div>
        {course.parts.map((parts, index) => {
          return (
            <p key={index}>
              {parts.name} {parts.exercises}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
