import React from "react";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  const Header = () => {
    return (
      <>
        <h1>{course}</h1>
      </>
    );
  };
  const Content = () => {
    console.log(parts);
    return (
      <>
        <p>
          {parts[0].name} {parts[0].exercises}
        </p>
        <p>
          {parts[1].name} {parts[1].exercises}
        </p>
        <p>
          {parts[2].name} {parts[2].exercises}
        </p>

        {/* <Part name={parts[0].name} exercises={parts[0].exercises} />
        <Part name={parts[1].name} exercises={parts[1].exercises} />
        <Part name={parts[2].name} exercises={parts[2].exercises} /> */}
      </>
    );
  };

  // const Part = () => {
  //   return (
  //     <>
  //       <p>
  //         {parts.name} {parts.exercises}
  //       </p>
  //     </>
  //   );
  // };
  const Total = () => {
    console.log(parts);
    return (
      <p>
        Number of exercises{" "}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
