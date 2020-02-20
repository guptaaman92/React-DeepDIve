import React, {useEffect} from "react";
import classes from "./Cockpit.module.css";

const Cockpit = props => {
useEffect(() => {
  console.log('[Cockpit.js] useEffect');
setTimeout(() => {
alert('saved data to cloud');
}, 1000);
}, []);
  const assignedClasses = [];

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className="classes.Cockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
