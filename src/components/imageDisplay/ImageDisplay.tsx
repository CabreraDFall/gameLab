type Params = {
  image: string;
  alt: string;
  dimension: string;
  hidden: string;
};
import {} from "./imageDisplay.css";
function ImageDisplay({ image, alt, dimension, hidden }: Params) {
  return <img src={image} alt={alt} className={`${dimension} ${hidden}`} />;
}

export default ImageDisplay;
