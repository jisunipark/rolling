import { styled } from 'styled-components';

export const Header = styled.div`
  background-color: #fff;
  display: flex;
  padding: 11px 360px;
  align-items: center;
`;

export const HeaderGap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderFont = styled.h1`
  color: var(--gray-light-gray-90, #4a494f);
  text-align: center;
  font-family: Poppins;
  font-size: 19.971px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// ------------- headerService 레이아웃

export const HeaderService = styled.div`
  height: 68px;

  display: flex;
  align-items: center;
  width: 1207px;
`;
export const HeaderServiceNameGap = styled.div`
  display: flex;
  align-items: center;
  gap: 263px;
`;

/// 여기서 부터 목데이터구간 수정 필요함.

export const HeaderServiceName = styled.h1`
  color: var(--gray-800, #2b2b2b);
  width: 227px;

  /* Font/28 Bold */
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 150% */
  letter-spacing: -0.28px;
`;

export const HeaderServiceImg = styled.img`
  border-radius: 140px;
  border: 1.4px solid #fff;
  display: flex;
  width: 28px;
  height: 28px;
  align-items: center;
  flex-shrink: 0;
`;

export const HeaderServiceMessageCount = styled.p`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px; /* 150% */
  margin-left: 11px;
`;

export const HeaderServiceMessageCountText = styled.p`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
`;

// 여기까지 목데이터 구간 수정 필요함

export const HeaderServiceBifurcationA = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray-200, #eee);
  margin: auto 28px;
`;

export const HeaderServiceEmoji = styled.div`
  gap: 4px;
  display: flex;
  padding: 8px 12px;
  align-items: flex-start;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
`;

export const HeaderServiceEmojiCount = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const HeaderServiceEmojiList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const HeaderServiceEmojiButton = styled.button`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;

export const HeaderServiceEmojiAdd = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 8px;
`;

export const HeaderServiceBifurcationB = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray-200, #eee);
  margin: auto 13px;
`;

export const HeaderServiceURLButton = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;

// --------------- CardList ------ //

export const CardContiner = styled.li`
  position: relative;
  width: 384px;
  height: 280px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;
// flex 작업 해야함. 일단 임시방편으로 position작업
// position으로 해도 괜찮을지도..?
export const CreateButton = styled.button`
  bottom: 112px;
  left: 164px;
  position: absolute;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--gray-500, #555);
`;

export const MainContent = styled.div`
  background: var(--orange-200, #ffe2ad);
  width: 100%;
  height: 1080px;
`;

export const MainUl = styled.ul`
  margin-top: 113px;
  justify-content: center;
  gap: 24px;
  grid-template-columns: 384px 384px 384px;
  display: grid;
  list-style: none;
`;

export const Testdiv = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

// ----------- 카드리스트

export const CardPaper = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid var(--gray-200, #eee);
  background: var(--white, #fff);
`;

export const CardProfile = styled.div`
  position: relative;
  border-bottom: 1px solid var(--gray-200, #eee);
  display: flex;
  width: 384px;
  padding: 28px 24px 15px 24px;
  align-items: flex-start;
  gap: 15px;
`;

export const CardProfileTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const CardProfileSender = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
`;

export const CardProfileRelationship = styled.div`
  color: var(--green-500, #2ba600);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.07px;
  padding: 0px 8px;
  border-radius: 4px;
  background: var(--green-100, #e4fbdc);
`;

export const CardProfileFrom = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
`;

export const CardProfileName = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
`;
// white-space: nowrap; 얘는 한줄만 표시 이거 써서 한줄로 한 다음 말 줄임표를 쓸지 말지 고민입니다.
// text-overflow: ellipsis; 얘는 넘칠때 말줄임표료 변경

export const CardProfileComment = styled.div`
  margin: 16px 24px 16px;
  overflow: hidden;
  color: var(--gray-600, #4a4a4a);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
  width: 336px;
  height: 106px;
  flex-shrink: 0;
`;

export const CardProfileCreatedAt = styled.p`
  margin: 0px 0px 24px 24px;
  color: var(--gray-400, #999);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.06px;
`;

// 쓰레기통 버튼들

export const CardProfileDeleted = styled.img`
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;

export const CardProfileDeletedButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 28px;
  right: 24px;
`;
// 여기까지 쓰레기통
