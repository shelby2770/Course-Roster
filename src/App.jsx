import "./App.css";
import Header from "./components/header";
import Course_adder from "./components/Course_adder";
import Contents from "./components/contents";
import { useState } from "react";

function App() {
  const [courses, setCourses] = useState([]);
  const [creditHour, setCreditHour] = useState(20);
  const [price, setPrice] = useState(0);
  const handleAddCourses = (content) => {
    let newCreditHour = creditHour - content.creditHour;
    if (newCreditHour < 0) {
      alert("No credit remaining");
    } else if (courses.includes(content)) {
      alert("Already selected");
    } else {
      const updateCourses = [...courses, content];
      setCourses(updateCourses);
      setCreditHour(newCreditHour);
      setPrice(price + parseInt(content.price.substring(1)));
    }
  };
  return (
    <>
      <Header></Header>
      <div className="flex flex-row justify-between">
        <div className="basis-3/4">
          <Contents handleAddCourses={handleAddCourses}></Contents>
        </div>
        <div>
          <Course_adder arr={[courses, creditHour, price]}></Course_adder>
        </div>
      </div>
    </>
  );
}

export default App;
