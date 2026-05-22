import RestaurantCard from "./restaurantCard";
import { restauarantList } from "../config";
// const RestaurantList = () => {
//   return (
//     <div className="restuarant-list">
//       <RestaurantCard data={restauarantList[0]} />
//       <RestaurantCard data={restauarantList[1]} />
//       <RestaurantCard data={restauarantList[2]} />
//       <RestaurantCard data={restauarantList[3]} />
//       <RestaurantCard data={restauarantList[4]} />
//     </div>
//   );
// };

// map use
const RestaurantList = () => {
  return (
    <div className="restuarant-list">
      <h1 className="text-7xl text-red-600">Whats Your Mind</h1>
      {restauarantList.map((params, index) => {
        console.log(params.info.id);

        return <RestaurantCard data={params} key={params.info.id} />;
      })}
    </div>
  );
};

export default RestaurantList;
