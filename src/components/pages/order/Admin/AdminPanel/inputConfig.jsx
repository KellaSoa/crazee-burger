import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { ISAVALAIBLE_OPTIONS, ISPUBLICISED_OPTIONS } from "../../../../../enums/select";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
 
export const getInputTextsConfig = (newProduct) => [
  {
    id: 0,
    value: newProduct.title,
    placeholder: "Nom du produit (ex: Super Burger) ",
    Icon: <FaHamburger className="icon" />,
    name: "title",
    className:"title"
  },
  {
    id: 1,
    value: newProduct.imageSource,
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png) ",
    Icon: <BsFillCameraFill className="icon" />,
    name: "imageSource",
    className:"imagesource"
  },
  {
    id: 2,
    value: newProduct.price ? newProduct.price : "",
    placeholder: "prix ",
    Icon: <MdOutlineEuro className="icon" />,
    name: "price",
    className:"price"
  },
];

export const getSelectsConfig = (newProduct) =>[
  {
    id: 3,
    value: newProduct.isAvailable,
    options: ISAVALAIBLE_OPTIONS,
    Icon: <FiPackage className="icon" />,
    name: "isAvailable",
    className:"is-avalaible"
  },
  {
    id: 4,
    value: newProduct.isPublicised,
    options: ISPUBLICISED_OPTIONS,
    Icon: <GoMegaphone className="icon" />,
    name: "isPublicised",
    className:"is-publicised"
  },
];

