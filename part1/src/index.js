import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part1 = (props) => {
  return (
    <p>
      {props.part1} {props.exercises}
    </p>
  );
};

const Part2 = (props) => {
  return (
    <p>
      {props.part2} {props.exercises}
    </p>
  );
};

const Part3 = (props) => {
  return (
    <p>
      {props.part3} {props.exercises}
    </p>
  );
};



const App = () => {
  const course = "Half Stack application development"

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const total = {
    name: "Number of exercises"
  }

  const Total = (props) => {
  
    return (
      <p>
        {props.total} {part1.exercises + part2.exercises + part3.exercises}
      </p>
    );
  };



  const Content = (props) => {
    return (
      <div>
        <Part1 part1={part1.name} exercises={part1.exercises} />
        <Part2 part2={part2.name} exercises={part2.exercises} />
        <Part3 part3={part3.name} exercises={part3.exercises} />
      </div>
    );
  };


  return (
    <div>
      <Header course={course} />
      <Content />

      <Total total={total.name} 
        
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
