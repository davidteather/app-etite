import ImageSlides from "./components/ImageSlides";
export default function RestaurantWrapper(props) {
  var restaurant = props.restaurant;
  return (
    <>
      <ImageSlides restaurant={restaurant} newGenerator={props.newGenerator} />
      {restaurant.title}
    </>
  );
};