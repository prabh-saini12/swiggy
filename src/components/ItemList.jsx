import { CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {
//   console.log(items);
  return (
    <div className="p-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-col md:flex-row justify-between items-center p-4 mb-4 border border-gray-200 rounded-lg shadow-md"
        >
          <div className="flex-1">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2">
              <span className="font-bold text-lg">{item.card.info.name}</span>
              <span className="text-gray-700 mt-2 md:mt-0">
                ₹-{' '}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-gray-600">{item.card.info.description}</p>
          </div>
          <div className="relative w-full md:w-32 mt-4 md:mt-0 ml-0 md:ml-4">
            <img
              className="w-full h-32 object-cover rounded-lg"
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg">
              ADD+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
