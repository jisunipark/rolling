import styled from 'styled-components';

// 지선

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 720px;
  height: 944px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;
  border: 1px solid red;
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

  & input {
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  & input:focus {
    border: 2px solid #555;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
          <input type="text" id="sender" />
        </StyledSection>

        <StyledSection>
          <label htmlFor="profileImgURL">프로필 이미지</label>

          <input type="file" id="profileImgURL" />
        </StyledSection>

        <StyledSection>
          <label htmlFor="relationship">상대와의 관계</label>

          <select id="relationship">
            <option value="friend">친구</option>
            <option value="acquaintance">지인</option>
            <option value="coworker">동료</option>
            <option value="family">가족</option>
          </select>
        </StyledSection>

        <StyledSection>
          <label htmlFor="content">내용을 입력해 주세요</label>
          <textarea id="content" />
        </StyledSection>

        <StyledSection>
          <label htmlFor="font">폰트 선택</label>
          <select id="font">
            <option value="noto-sans">Noto Sans</option>
            <option value="pretendard">Pretendard</option>
            <option value="나눔명조">나눔명조</option>
            <option value="나눔손글씨-손편지체">나눔손글씨 손편지체</option>
          </select>
        </StyledSection>
      </StyledContainer>
      <StyledButton>생성하기</StyledButton>
    </div>
  );
};

export default CreateMessagePage;
