import { useEffect } from "react";
import { useState } from "react";

const Contents = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetch("fake_data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
};

export default Contents;
