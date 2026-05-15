const RestaurantCard = () => {
  const reastuarantData = [
    {
      name: "Dominos",
      image:
        "https://www.allrecipes.com/thmb/kgZB2WpV5NUBsd0XPOkcOOV9SEY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23290-pizza-dough-iii-VAT-Beauty-4x3-06192801c8fa48fe8afaadfea28f532b.jpg",
      price: 1000000,
      rating: 10.9,
      cuisines: ["south indian"],
    },
    {
      name: "Dominos",
      image:
        "https://www.allrecipes.com/thmb/kgZB2WpV5NUBsd0XPOkcOOV9SEY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23290-pizza-dough-iii-VAT-Beauty-4x3-06192801c8fa48fe8afaadfea28f532b.jpg",
      price: 1000000,
      rating: 10.9,
      cuisines: ["south indian"],
    },
  ];
  return (
    <div className="card">
      <img src={reastuarantData[0].image} alt="swarup delivery" />
      <h2>{reastuarantData[0].name}</h2>
      <div>{reastuarantData[0].cuisines}</div>
      <h3>{reastuarantData[0].price}</h3>
    </div>
  );
};
export default RestaurantCard;

const arr = ["jjj", "kwkwk"];
