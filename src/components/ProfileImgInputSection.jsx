import { useRef, useState, useEffect } from 'react';
import {
  StyledSection,
  ProfileImgInput,
  FlexDiv,
  ProfileImgList,
  RoundImg,
} from './style';
import DefaultProfileImg from '../assets/images/default-profile-img.png';
import SampleImg1 from '../assets/images/sample-profile-img-1.png';
import SampleImg2 from '../assets/images/sample-profile-img-2.png';
import { fetchProfileImg } from '../Api/messageApi';

/* const Images = {
  imageUrls: [
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
    'https://picsum.photos/id/522/100/100',
    'https://picsum.photos/id/547/100/100',
    'https://picsum.photos/id/268/100/100',
    'https://picsum.photos/id/1082/100/100',
    'https://picsum.photos/id/571/100/100',
    'https://picsum.photos/id/494/100/100',
    'https://picsum.photos/id/859/100/100',
    'https://picsum.photos/id/437/100/100',
    'https://picsum.photos/id/1064/100/100',
  ],
}; */

const ProfileImgInputSection = ({ children }) => {
  const imgRef = useRef();
  const [profileImgs, setProfileImgs] = useState([]);

  const handleChangeProfileImg = (e) => {
    imgRef.current.src = e.target.src;
  };

  const getData = async () => {
    const { imageUrls } = await fetchProfileImg;
    setProfileImgs(imageUrls);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledSection>
      <label htmlFor="profileImgURL">{children}</label>
      <ProfileImgInput>
        <img
          src={DefaultProfileImg}
          alt="기본 프로필 이미지"
          width="80px"
          height="80px"
          ref={imgRef}
          className="selected-profile-img"
        />
        <FlexDiv>
          <span>프로필 이미지를 선택해 주세요!</span>
          <ProfileImgList>
            {/* <RoundImg
              src={profileImgs[0]}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            /> */}
            <RoundImg
              src={SampleImg2}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg1}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg2}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg1}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <br />
            <RoundImg
              src={SampleImg2}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg1}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg2}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg1}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg2}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
          </ProfileImgList>
        </FlexDiv>
      </ProfileImgInput>
    </StyledSection>
  );
};

export default ProfileImgInputSection;
