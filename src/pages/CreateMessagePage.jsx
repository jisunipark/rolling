import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TextInputSection from '../components/TextInputSection';
import ProfileImgInputSection from '../components/ProfileImgInputSection';
import TextareaInputSection from '../components/TextareaInputSection';
import ToggleDownSection from '../components/ToggleDownSection';

const StyledContainer = styled.div`
  margin: 47px auto 62px auto;
  width: 720px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;
  /* border: 1px solid red; */
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
        <TextInputSection>From.</TextInputSection>
        <ProfileImgInputSection>프로필 이미지</ProfileImgInputSection>
        <ToggleDownSection options="relationship">
          상대와의 관계
        </ToggleDownSection>
        <TextareaInputSection>내용을 입력해 주세요</TextareaInputSection>
        <ToggleDownSection options="font">폰트 선택</ToggleDownSection>
      </StyledContainer>
      <Link to="/post/{id}">
        <StyledButton>생성하기</StyledButton>
      </Link>
    </div>
  );
};

export default CreateMessagePage;
