import { StatisticItem } from "components";
import { StatisticsList, StatisticTitle } from "./Statistics.module.jsx";

const icons = [];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, title, total }, index) => (
          <StatisticItem
            key={id}
            title={title}
            total={total}
            icon={icons[index]}
          />
        ))}
      </StatisticsList>
    </>
  );
};
