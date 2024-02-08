import { ProfileListItem } from "components";

import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from "./ProfileList.module";

export const ProfileList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list.map(({ id, title, image, profitability }) => (
          <ProfileListItem
            key={id}
            title={title}
            image={image}
            profitability={profitability}
            isIncrease={profitability > 0}
          />
        ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
