import ArrowDown from '../../../assets/images/arrow_down.png';
import ArrowAdd from '../../../assets/images/add-24.png';
import Share from '../../../assets/images/share-24.png';
import Data from '../../../mock.json';
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
  // HeaderServiceImg,
  // HeaderServiceMessageCount,
  HeaderServiceMessageCountText,
  HeaderServiceName,
} from '../MessageListPageCss';

// 엄지,눈하트,폭죽 플렉스 겹쳐지게 설정해야함.
// 그럼 gap잡힌 레이아웃도 사라질것.
const HeaderUser = () => {
  const { count } = Data;

  return (
    <HeaderService>
      <HeaderServiceNameGap>
        <HeaderServiceName>To.{count}</HeaderServiceName>
        {/* <HeaderServiceImg src={profileImageURL1} alt="프로필이미지" /> */}
      </HeaderServiceNameGap>
      {/* <HeaderServiceImg src={profileImageURL2} alt="프로필이미지" /> */}

      {/* <HeaderServiceMessageCount>{messageCount}</HeaderServiceMessageCount> */}
      <HeaderServiceMessageCountText>
        명이 작성했어요!
      </HeaderServiceMessageCountText>

      <HeaderServiceBifurcationA />
      <HeaderServiceEmojiList>
        <HeaderServiceEmoji>24</HeaderServiceEmoji>
        <HeaderServiceEmoji>16</HeaderServiceEmoji>
        <HeaderServiceEmoji>10</HeaderServiceEmoji>
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
  );
};

export default HeaderUser;
