import { useEffect } from "react";
import { useState } from "react";
import Content from "./Content";
import PropTypes from "prop-types";

const Contents = ({ handleAddCourses }) => {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    fetch("fake_data.json")
      .then((res) => res.json())
      .then((data) => setContents(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {contents.map((content) => (
        <Content
          key={content.id}
          content={content}
          handleAddCourses={handleAddCourses}
        ></Content>
      ))}
    </div>
  );
};

Contents.propTypes = {
  handleAddCourses: PropTypes.func,
};
export default Contents;
