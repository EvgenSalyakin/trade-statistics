import { ForbesItem, Avatar, Name, Capital } from "./ProfileListItem.module";
import { BiDollarCircle } from "react-icons/bi";
import { FcBullish, FcBearish } from "react-icons/fc";
import variables from "../../styles/theme.scss";

export const ProfileListItem = ({
  title,
  image,
  profitability,
  isIncrease,
}) => {
  return (
    <ForbesItem>
      <Avatar src={process.env.PUBLIC_URL + "/images/" + image} alt={title} />
      <Name>{title}</Name>
      <Capital>
        {profitability}
        <BiDollarCircle color={variables.colors_accent} size={22} />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </Capital>
    </ForbesItem>
  );
};
