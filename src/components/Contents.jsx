import { useEffect } from "react";
import { useState } from "react";
import Content from "./Content";

const Contents = () => {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    fetch("fake_data.json")
      .then((res) => res.json())
      .then((data) => setContents(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {contents.map((content) => (
        <Content key={content.id} content={content}></Content>
      ))}
    </div>
  );
};

export default Contents;
