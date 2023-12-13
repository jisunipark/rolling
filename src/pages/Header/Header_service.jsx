// import { useEffect, useState } from 'react';
import ArrowDown from '../../assets/images/arrow_down.png';
import ArrowAdd from '../../assets/images/add-24.png';
import Share from '../../assets/images/share-24.png';
import Data from '../../mock.json';
import {
  HeaderService,
  HeaderServiceBifurcationA,
  HeaderServiceBifurcationB,
  HeaderServiceEmojiList,
  HeaderServiceEmojiAdd,
  HeaderServiceEmojiButton,
  HeaderServiceNameGap,
  HeaderServiceURLButton,
  HeaderServiceEmoji,
  HeaderServiceImg,
  HeaderServiceMessageCount,
  HeaderServiceMessageCountText,
  HeaderServiceName,
  HeaderServiceEmojiCount,
  Testdiv,
} from './MessageListPageCss';

// 엄지,눈하트,폭죽 플렉스 겹쳐지게 설정해야함.
// 그럼 gap잡힌 레이아웃도 사라질것.
const HeaderUser = () => {
  // 목데이터들인데 api주소 받으면 변경해서 작성.
  const { results, count } = Data;
  const [{ recentMessages }] = results;
  // const { profileImageURL: profileImageURL1 } = recentMessages[0];
  // const { profileImageURL: profileImageURL2 } = recentMessages[1];

  const { profileImageURL: profileImageURL1 } = recentMessages[0];
  const { profileImageURL: profileImageURL2 } = recentMessages[1];

  return (
    <Testdiv>
      <HeaderService>
        <HeaderServiceNameGap>
          <HeaderServiceName>To.{results[0].name}</HeaderServiceName>
          <HeaderServiceImg src={profileImageURL1} alt="프로필이미지" />
        </HeaderServiceNameGap>
        <HeaderServiceImg src={profileImageURL2} alt="프로필이미지" />

        <HeaderServiceMessageCount>{count}</HeaderServiceMessageCount>
        <HeaderServiceMessageCountText>
          {Data.Count}명이 작성했어요!
        </HeaderServiceMessageCountText>

        <HeaderServiceBifurcationA />
        <HeaderServiceEmojiList>
          <HeaderServiceEmoji>
            👍<HeaderServiceEmojiCount>24</HeaderServiceEmojiCount>
          </HeaderServiceEmoji>
          <HeaderServiceEmoji>
            😍<HeaderServiceEmojiCount>16</HeaderServiceEmojiCount>
          </HeaderServiceEmoji>
          <HeaderServiceEmoji>
            🎉<HeaderServiceEmojiCount>10</HeaderServiceEmojiCount>
          </HeaderServiceEmoji>
        </HeaderServiceEmojiList>

        <HeaderServiceEmojiButton type="button">
          <img src={ArrowDown} alt="이모티콘배열" />
        </HeaderServiceEmojiButton>
        <HeaderServiceEmojiAdd>
          <img src={ArrowAdd} alt="이모티콘추가" />
          추가
        </HeaderServiceEmojiAdd>
        <HeaderServiceBifurcationB />
        <HeaderServiceURLButton>
          <img src={Share} alt="URL복사" />
        </HeaderServiceURLButton>
      </HeaderService>
    </Testdiv>
  );
};

export default HeaderUser;
