import styled from 'styled-components';
import StyledSection from './StyledSection';
import DefaultProfileImg from '../assets/images/default-profile-img.png';
import SampleImg1 from '../assets/images/sample-profile-img-1.png';
import SampleImg2 from '../assets/images/sample-profile-img-2.png';

const ProfileImgList = styled.div`
  display: flex;
  gap: 4px;
`;

const RoundImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid #eee;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & span {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
`;

const ProfileImgInput = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const ProfileImgInputSection = ({ children }) => {
  return (
    <StyledSection>
      <label htmlFor="profileImgURL">{children}</label>
      <ProfileImgInput>
        <img
          src={DefaultProfileImg}
          alt="기본 프로필 이미지"
          width="80px"
          height="80px"
        />
        <FlexDiv>
          <span>프로필 이미지를 선택해 주세요!</span>
          <ProfileImgList>
            <RoundImg src={SampleImg1} alt="샘플 프로필 이미지" />
            <RoundImg src={SampleImg2} alt="샘플 프로필 이미지" />
            <RoundImg src={SampleImg1} alt="샘플 프로필 이미지" />
            <RoundImg src={SampleImg2} alt="샘플 프로필 이미지" />
            <RoundImg src={SampleImg1} alt="샘플 프로필 이미지" />
            <RoundImg src={SampleImg2} alt="샘플 프로필 이미지" />
            <RoundImg src={SampleImg1} alt="샘플 프로필 이미지" />
            <RoundImg src={SampleImg2} alt="샘플 프로필 이미지" />
            <RoundImg src={SampleImg1} alt="샘플 프로필 이미지" />
            <RoundImg src={SampleImg2} alt="샘플 프로필 이미지" />
          </ProfileImgList>
        </FlexDiv>
      </ProfileImgInput>
    </StyledSection>
  );
};

export default ProfileImgInputSection;
