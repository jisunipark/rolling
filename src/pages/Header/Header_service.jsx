import EmojiPicker from 'emoji-picker-react';
import { useState, useEffect } from 'react';
import ArrowDown from '../../assets/images/arrow_down.png';
import ArrowAdd from '../../assets/images/add-24.png';
import Share from '../../assets/images/share-24.png';
// import Data from '../../mock.json';
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
  HeaderServiceURLShareMenuKaKao,
  HeaderServiceEmojiPicker,
  HeaderServiceMoblieFlex,
  HeaderServiceURLShareMenu,
  HeaderServiceMedio,
} from './MessageListPageCss';
import URLToast from './URLSave';
// 파라미터에 Data넣어야함.
const HeaderUser = ({ data }) => {
  const { name, messageCount, recentMessages } = data;
  const [emoji, setEmoji] = useState(false);
  const [urlMenu, setUrlMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [urlShare, setUrlShare] = useState(false);

  // const fristImg = recentMessages[0].profileImageURL;

  // const { profileImageURL: profileImageURL1 } = recentMessages[0];
  // const { profileImageURL: profileImageURL2 } = recentMessages[1];
  const handleShare = () => setUrlMenu(!urlMenu);

  const handleEmoji = () => setEmoji(!emoji);

  const handleEmojiAdd = () => setShowEmojiPicker(!showEmojiPicker);

  const handleURLShare = () => {
    setUrlShare(!urlShare);
  };

  useEffect(() => {
    setTimeout(() => {
      handleURLShare();
      setUrlShare(false); // 실행 후 상태 초기화
    }, 3000);
  }, [urlShare]);

  // ----------------------
  return (
    <Testdiv>
      <HeaderService>
        <HeaderServiceName>To.{name}</HeaderServiceName>
        {urlShare && <URLToast />}
        <HeaderServiceMedio>
          <HeaderServiceMoblieFlex>
            <HeaderServiceMans>
              {/* <HeaderServiceImgA src={profileImageURL1} alt="프로필이미지" />
              <HeaderServiceImgB src={profileImageURL2} alt="프로필이미지" /> */}
              {/* -3 해야함. */}
              <HeaderServiceImgC>
                {/* <p>+{recentMessages.length}</p> */}
              </HeaderServiceImgC>
              <HeaderServiceMessageDiv>
                <HeaderServiceMessageCount>
                  {/* {recentMessages.length} */}
                </HeaderServiceMessageCount>
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
              <p>추가</p>
              {showEmojiPicker && (
                <HeaderServiceEmojiPicker>
                  <EmojiPicker />
                </HeaderServiceEmojiPicker>
              )}
            </HeaderServiceEmojiAdd>

            <HeaderServiceBifurcationB />
            <HeaderServiceURLButton onClick={handleShare}>
              <img src={Share} alt="공유기능" />
              {urlMenu && (
                <HeaderServiceURLToggle>
                  <HeaderServiceURLShareMenuKaKao>
                    카카오톡 공유
                  </HeaderServiceURLShareMenuKaKao>

                  <HeaderServiceURLShareMenu onClick={handleURLShare}>
                    URL 공유
                  </HeaderServiceURLShareMenu>
                </HeaderServiceURLToggle>
              )}
            </HeaderServiceURLButton>
          </HeaderServiceMoblieFlex>
        </HeaderServiceMedio>
      </HeaderService>
    </Testdiv>
  );
};

export default HeaderUser;
