
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();

  //   console.log(json, "menu");
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />; // Return Shimmer component if resInfo is null

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  return (
    <div className="menu">
      <h1> {name}</h1>
      <p>
        {Array.isArray(cuisines) ? cuisines.join(", ") : ""} -{" "}
        {costForTwoMessage}
      </p>
      <h2>Menus</h2>
      <ul>
        {Array.isArray(itemCards) &&
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {costForTwoMessage.substr(0, 4)}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
