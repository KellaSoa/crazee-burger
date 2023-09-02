import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { formatPrice } from "../../../../../utils/maths";
export const getInputTextsConfig = (newProduct) => [
  {
    id: 0,
    value: newProduct.title,
    placeholder: "Nom du produit (ex: Super Burger) ",
    Icon: <FaHamburger className="icon" />,
    name: "title",
  },
  {
    id: 1,
    value: newProduct.imageSource,
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png) ",
    Icon: <BsFillCameraFill className="icon" />,
    name: "imageSource",
  },
  {
    id: 2,
    value: newProduct.price ? formatPrice(newProduct.price) : "",
    placeholder: "prix ",
    Icon: <MdOutlineEuro className="icon" />,
    name: "price",
  },
];
