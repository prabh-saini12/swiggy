import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = ({ theme }) => {
  const [listOfResto, setListOfRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListRestro, setFilteredListRestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestro(restaurants);
      setFilteredListRestro(restaurants); // Initialize filtered list with all restaurants
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }

  const { setUserName, loggedInUser } = useContext(UserContext);

  // Function to handle search filtering
  const handleSearch = () => {
    const filteredRestro = listOfResto.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListRestro(filteredRestro);
  };

  // Function to filter top rated restaurants
  const handleTopRated = () => {
    const filterlist = listOfResto.filter((res) => res.info.avgRating > 4);
    setFilteredListRestro(filterlist);
  };

  // Render shimmer if filteredListRestro is empty or undefined
  if (!filteredListRestro || filteredListRestro.length === 0) {
    return <Shimmer />;
  }

  return (
    <div
      className={`body ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-400 m-4 rounded-lg hover:bg-green-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-green-400 m-4 rounded-lg hover:bg-green-600"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredListRestro.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} theme={theme} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
