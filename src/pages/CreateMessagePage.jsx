import styled from 'styled-components';
import ToggleArrow from '../assets/images/toggle-arrow-down.svg';
// textarea 메뉴
import TextBold from '../assets/images/text-bold.svg';
import TextItalic from '../assets/images/text-italic.svg';
import TextUnderlined from '../assets/images/text-underlined.svg';
import AlignmentBoth from '../assets/images/alignment-both.svg';
import AlignmentRight from '../assets/images/alignment-right.svg';
import AlignmentCenter from '../assets/images/alignment-center.svg';
import UnorderedList from '../assets/images/unordered-list.svg';
import OrderedList from '../assets/images/ordered-list.svg';
import FontIcon from '../assets/images/font.svg';
// 지선

const StyledContainer = styled.div`
  margin: 47px auto 62px auto;
  width: 720px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;
  /* border: 1px solid red; */
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & label {
    color: #181818;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }

  & input,
  & textarea,
  & button {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  & input:focus,
  & textarea:focus {
    border: 2px solid #555;
  }

  & input::placeholder,
  & button {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
  }

  & button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;
    background-color: #fff;
  }

  & li {
    padding: 12px 16px;
    color: #555;
  }

  & li:hover {
    background-color: #f6f6f6;
  }

  & ul {
    width: 320px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  & textarea {
    position: relative;
    width: 720px;
    height: 260px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
`;

const TextSettingBar = styled.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 12px 15px;
  width: 718px;
  height: 49px;
  border-radius: 8px 8px 0px 0px;
  background-color: #eee;
  gap: 14px;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  margin: 0 auto 24px;
  padding: 14px 24px;
  width: 720px;
  border-radius: 12px;
  background-color: #9935ff;
  color: #fff;
`;

// 이게 이 페이지의 메인
const CreateMessagePage = () => {
  return (
    <div>
      <StyledContainer>
        <StyledSection>
          <label htmlFor="sender">From.</label>
          <input type="text" id="sender" placeholder="이름을 입력해 주세요." />
        </StyledSection>

        <StyledSection>
          <label htmlFor="profileImgURL">프로필 이미지</label>

          <input type="file" id="profileImgURL" />
        </StyledSection>

        <StyledSection>
          <label htmlFor="relationship">상대와의 관계</label>

          <button type="button">
            지인
            <img src={ToggleArrow} alt="드롭다운 화살표 이미지" />
          </button>
          <ul>
            <li>친구</li>
            <li>지인</li>
            <li>동료</li>
            <li>가족</li>
          </ul>
        </StyledSection>

        <StyledSection>
          <label htmlFor="content">내용을 입력해 주세요</label>
          <TextSettingBar>
            <div>
              <img src={TextBold} alt="bold" />
              <img src={TextItalic} alt="italic" />
              <img src={TextUnderlined} alt="underlined" />
            </div>
            <div>
              <img src={AlignmentCenter} alt="alignment center" />
              <img src={AlignmentRight} alt="alignmnet right" />
              <img src={AlignmentBoth} alt="alignment both" />
            </div>
            <div>
              <img src={UnorderedList} alt="unordered list" />
              <img src={OrderedList} alt="ordered list" />
            </div>
            <div>
              <img src={FontIcon} alt="font icon" />
            </div>
          </TextSettingBar>
          <textarea id="content" />
        </StyledSection>

        <StyledSection>
          <label htmlFor="font">폰트 선택</label>
          <button type="button">
            Noto Sans
            <img src={ToggleArrow} alt="드롭다운 화살표 이미지" />
          </button>
          <ul>
            <li>Noto Sans</li>
            <li>Pretendard</li>
            <li>나눔명조</li>
            <li>나눔손글씨 손편지체</li>
          </ul>
        </StyledSection>
      </StyledContainer>
      <StyledButton>생성하기</StyledButton>
    </div>
  );
};

export default CreateMessagePage;
