import { ImageUrl } from "../config.js";
const RestaurantCard = (props) => {
  // console.log(props.data.info);
  const { name, cuisines, costForTwo, cloudinaryImageId } = props.data.info;

  return (
    <div className="card">
      <img src={ImageUrl + cloudinaryImageId} alt="swarup delivery" />
      <h2>{name}</h2>
      <div>{cuisines.join(", ")}</div>
      {costForTwo}
    </div>
  );
};
export default RestaurantCard;
// const arr14 = [20, 52, 45, 25];
// const arr = [20, 52, 45, 25];
// arr.map((el) => {
//   console.log(el);
// });
