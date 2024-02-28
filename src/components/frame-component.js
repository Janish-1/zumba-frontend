import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent = ({ state }) => {
  const baseUrl = 'http://zumba.ramo.co.in';
  const navigate = useNavigate();
  const { categories, loading } = state;

  const handleImageClick = (categoryId) => {
    navigate(`/exercises/${categoryId}`);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto whitespace-nowrap">
        {categories.map((category, index) => (
          <div key={index} className="inline-block mr-4" onClick={() => handleImageClick(category.id)}>
            <div className="relative">
              <img
                className="w-[12rem] h-[12rem] object-cover rounded-md cursor-pointer"
                loading="lazy"
                alt=""
                src={`${baseUrl}${category.category_image}`}
                onClick={() => handleImageClick(category.id)}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                <b className="text-white text-lg">{category.category_name}</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameComponent;
