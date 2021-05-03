import React from "react";

const App = () => {
  const kurssitiedot = {
    nimi: "Half Stack application development",
    osat: [
      {
        title: "Fundamentals of React",
        exercises: 10,
      },
      {
        title: "Using props to pass data",
        exercises: 7,
      },
      {
        title: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header kurssitiedot={kurssitiedot} />
      <Content kurssitiedot={kurssitiedot} />
      <Total kurssitiedot={kurssitiedot} />
    </div>
  );
};
const Header = (props) => {
  return (
    <>
      <h1>{props.kurssitiedot.nimi}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part
        title={props.kurssitiedot.osat[0].title}
        exercises={props.kurssitiedot.osat[0].exercises}
      />
      <Part
        title={props.kurssitiedot.osat[1].title}
        exercises={props.kurssitiedot.osat[1].exercises}
      />
      <Part
        title={props.kurssitiedot.osat[2].title}
        exercises={props.kurssitiedot.osat[2].exercises}
      />
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.title} tehtäviä: {props.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Yhteensä:
      {props.kurssitiedot.osat[0].exercises +
        props.kurssitiedot.osat[1].exercises +
        props.kurssitiedot.osat[2].exercises}
    </p>
  );
};

export default App;
