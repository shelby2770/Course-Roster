import PropTypes from "prop-types";
import Tittle_adder from "./Tittle_adder";

const Course_adder = ({ arr }) => {
  const [courses, rem_hr, price] = arr;
  let serial = 1;
  return (
    <div className="bg-base-100 shadow-xl p-2 rounded-lg">
      <h3 className="py-4 border-b-2 text-md text-[#2F80ED] font-semibold">
        Credit Hour Remaining {rem_hr} hr
      </h3>
      <h2 className="text-lg font-semibold my-4">Course Name</h2>
      <div className="py-2 border-b-2">
        {courses.map((course) => (
          <Tittle_adder
            key={course.id}
            serial={serial++}
            title={course.heading}
          ></Tittle_adder>
        ))}
      </div>
      <h4 className="py-2 border-b-2 text-md">
        Total Credit Hour : {20 - rem_hr}
      </h4>
      <h4 className="py-2 text-md">Total Price : {price} USD</h4>
    </div>
  );
};

Course_adder.propTypes = {
  arr: PropTypes.array.isRequired,
};
export default Course_adder;
