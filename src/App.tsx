import React, { useContext } from "react";
import "./App.css";


type Person = {
  name: string;
  title: string;
  department: string;
  badgeColor: string;
  number: string;
};

type AppContextType = {
  person: Person;
};

const AppContext = React.createContext<AppContextType>({
  person: {
    name: "",
    title: "",
    department: "",
    badgeColor: "",
    number: "",
  },
});

const Card = () => {
  const { person } = useContext(AppContext);

  return (
    <div className="card">
      <div className="card-header">
        <h2>{person.name}</h2>
        <h3>{person.title}</h3>
      </div>
      <div className="card-body">
        <p>Department: {person.department}</p>
      </div>
      <div className="card-body">
        <p>Number: {person.number}</p>
      </div>
    </div>
  );
};

const Badge = () => {
  const { person } = useContext(AppContext);

  return (
    <div
      className="badge"
      style={{ backgroundColor: person.badgeColor }}
    ></div>
  );
};

const App = () => {
  const person: Person = {
    name: "Andres Ortega",
    title: "Software Engineer",
    department: "Engineering",
    badgeColor: "blue",
    number: "3315459665"
  };

  return (
    <AppContext.Provider value={{ person }}>
      <div className="App">
        <Card />
        <Badge />
      </div>
    </AppContext.Provider>
  );
};

export default App;
