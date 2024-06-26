import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
  } = resData?.info;

  return (
    <div className="m-4 p-4 md:w-[250px] w-full rounded-lg bg-gray-50 hover:bg-gray-400">
      <img className="rounded-lg w-full" src={CDN_URL + cloudinaryImageId} alt={name} />
      <div className="py-4">
        <h3 className="font-bold text-xl">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
