import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {


  const [showItems, setShowItes] = useState(false);

  const handleClick = () => {
    setShowItes(!showItems);
  };
  return (
    <div>
      {/* header */}
      <div className="w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between  cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* accordion body */}
    </div>
  );
};

export default RestaurantCategory;
