import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";

const Content = ({ content, handleAddCourses }) => {
  return (
    <div className="bg-base-100 shadow-xl p-2 rounded-lg">
      <figure className="">
        <img className="" src={content.image} alt="" />
      </figure>
      <h3 className="py-2 text-sm font-semibold">{content.heading}</h3>
      <p className="h-16 text-gray-500 text-xs">{content.description}</p>
      <div className="py-2 flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <FaDollarSign />
          <h3 className="text-gray-500 text-xs">
            Price : {content.price.substring(1)}
          </h3>
        </div>
        <div className="flex flex-row items-center gap-2">
          <FaBookOpen />
          <h3 className="text-gray-500 text-xs">
            Credit : {content.creditHour}hr
          </h3>
        </div>
      </div>
      <button
        className="w-full btn rounded-md bg-[#2F80ED] text-white"
        onClick={()=> handleAddCourses(content)}
      >
        Select
      </button>
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.object.isRequired,
  handleAddCourses: PropTypes.func,
};

export default Content;
