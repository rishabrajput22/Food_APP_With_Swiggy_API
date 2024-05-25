import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-5 p-4 w-[250px] h-[450px] bg-gray-600 rounded-xl text-sky-200 hover:bg-black ">
      <img
        className="h-[250px] rounded-2xl mb-2"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {avgRating}</h4>
      <h4> {costForTwo}</h4>
      <h4> {sla.slaString}</h4>
    </div>
  );
};

export default ResturantCard;
