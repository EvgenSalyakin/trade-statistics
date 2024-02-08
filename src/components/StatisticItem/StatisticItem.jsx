import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from "./StatisticItem.module";

export const StatisticItem = ({ title, total, icon }) => {
  return (
    <StatisticBox>
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
