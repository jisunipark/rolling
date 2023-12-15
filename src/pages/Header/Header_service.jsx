import { useState } from 'react';
// import { useEffect, useState } from 'react';
import ArrowDown from '../../assets/images/arrow_down.png';
import ArrowAdd from '../../assets/images/add-24.png';
import Share from '../../assets/images/share-24.png';
import Ellipse from '../../assets/images/Ellipse 13.png';
import Data from '../../mock.json';
import {
  HeaderService,
  HeaderServiceBifurcationA,
  HeaderServiceBifurcationB,
  HeaderServiceEmojiList,
  HeaderServiceEmojiAdd,
  HeaderServiceEmojiButton,
  HeaderServiceURLButton,
  HeaderServiceEmoji,
  HeaderServiceMessageCount,
  HeaderServiceMessageCountText,
  HeaderServiceName,
  HeaderServiceEmojiCount,
  Testdiv,
  HeaderServiceImgA,
  HeaderServiceImgB,
  HeaderServiceImgC,
  HeaderServiceMans,
  HeaderServiceMessageDiv,
  HeaderServiceEmojiToggle,
  HeaderServiceURLToggle,
  HeaderServiceURLShareMenu,
} from './MessageListPageCss';

// 엄지,눈하트,폭죽 플렉스 겹쳐지게 설정해야함.
// 그럼 gap잡힌 레이아웃도 사라질것.
const HeaderUser = () => {
  const [emoji, setEmoji] = useState(false);
  const [urlMenu, setUrlMenu] = useState(false);
  // 목데이터들인데 api주소 받으면 변경해서 작성.
  const { results, count } = Data;
  const [{ recentMessages }] = results;

  const { profileImageURL: profileImageURL1 } = recentMessages[0];
  const { profileImageURL: profileImageURL2 } = recentMessages[1];
  const handleShare = () => setUrlMenu(!urlMenu);

  // setEmoji(!emoji); 대박 지선님 똑똑하십니다...
  const handleEmoji = () => setEmoji(!emoji);

  // &&연산자로 and,or문방식으로 이용가능. -논리연산자- 지선님 짱

  // isOpen && (
  //   <ul>
  //   {relationship.map((option, index) => {
  //   return <li>{option}</li>;
  //   })}
  //   </ul>
  //   )}

  console.log(handleEmoji);

  const handleEmojiAdd = () => {
    console.log('EmojiAdd');
  };
  return (
    <Testdiv>
      <HeaderService>
        <HeaderServiceName>To.{results[0].name}</HeaderServiceName>
        <HeaderServiceMans>
          <HeaderServiceImgA src={profileImageURL1} alt="프로필이미지" />
          <HeaderServiceImgB src={profileImageURL2} alt="프로필이미지" />
          <HeaderServiceImgC src={Ellipse} alt="타원프로필" />
          <HeaderServiceMessageDiv>
            <HeaderServiceMessageCount>{count}</HeaderServiceMessageCount>
            <HeaderServiceMessageCountText>
              명이 작성했어요!
            </HeaderServiceMessageCountText>
          </HeaderServiceMessageDiv>
        </HeaderServiceMans>
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
          {emoji && (
            <HeaderServiceEmojiToggle>
              <HeaderServiceEmoji>
                😍<HeaderServiceEmojiCount>16</HeaderServiceEmojiCount>
              </HeaderServiceEmoji>
              <HeaderServiceEmoji>
                😍<HeaderServiceEmojiCount>100</HeaderServiceEmojiCount>
              </HeaderServiceEmoji>
              <HeaderServiceEmoji>😍</HeaderServiceEmoji>
              <HeaderServiceEmoji>😍</HeaderServiceEmoji>
              <HeaderServiceEmoji>😍</HeaderServiceEmoji>
              <HeaderServiceEmoji />
              <HeaderServiceEmoji />
              <HeaderServiceEmoji />
            </HeaderServiceEmojiToggle>
          )}
        </HeaderServiceEmojiList>
        <HeaderServiceEmojiButton onClick={handleEmoji}>
          <img src={ArrowDown} alt="이모티콘배열" />
        </HeaderServiceEmojiButton>

        <HeaderServiceEmojiAdd onClick={handleEmojiAdd}>
          <img src={ArrowAdd} alt="이모티콘추가" />
          추가
        </HeaderServiceEmojiAdd>
        <HeaderServiceBifurcationB />
        <HeaderServiceURLButton onClick={handleShare}>
          <img src={Share} alt="공유기능" />
          {urlMenu && (
            <HeaderServiceURLToggle>
              <HeaderServiceURLShareMenu>
                카카오톡 공유
              </HeaderServiceURLShareMenu>
              <HeaderServiceURLShareMenu>URL 공유</HeaderServiceURLShareMenu>
            </HeaderServiceURLToggle>
          )}
        </HeaderServiceURLButton>
      </HeaderService>
    </Testdiv>
  );
};

export default HeaderUser;
