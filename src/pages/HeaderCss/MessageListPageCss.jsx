import { styled } from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 1920px;
  padding: 11px 360px;
  align-items: center;
  gap: 944px;
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
  display: flex;
  padding: 13px 360px;
  align-items: center;
`;
export const HeaderServiceName = styled.div`
  display: flex;
  align-items: center;
  gap: 263px;
  margin-right: 11px;
`;

export const HeaderServiceBifurcationA = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray-200, #eee);
  margin: auto 28px;
`;

export const HeaderServiceEmoji = styled.div`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
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

export const CardContiner = styled.div`
  display: flex;
  width: 384px;
  height: 280px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

export const CreateButton = styled.button`
  display: flex;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--gray-500, #555);
`;
