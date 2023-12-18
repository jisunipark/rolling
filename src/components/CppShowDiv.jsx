/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
import { styled } from 'styled-components';
// eslint-disable-next-line
import enabled from '../assets/images/Enabled.svg';

const ColorDiv = styled.div`
  margin: 45px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    margin: 40px 0 340px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 320px;
    margin: 28px 0 82px;
    gap: 12px;
  }
`;

const ImgDiv = styled(ColorDiv)``;

const ShowColorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  img {
    visibility: hidden;
  }
  &:hover {
    img {
      visibility: visible;
    }
  }
  @media (max-width: 768px) {
    width: 154px;
    height: 154px;
  }
`;

const ShowColorDiv1 = styled(ShowColorDiv)`
  background-color: #ffe2ad;
`;
const ShowColorDiv2 = styled(ShowColorDiv)`
  background-color: #ecd9ff;
`;
const ShowColorDiv3 = styled(ShowColorDiv)`
  background-color: #b1e4ff;
`;
const ShowColorDiv4 = styled(ShowColorDiv)`
  background-color: #d0f5c3;
`;

const ShowImgDiv = styled(ShowColorDiv)`
  background-image: url(${(props) => props.src});
`;

// eslint-disable-next-line
const CppShowDiv = ({isColor,backgroundImgs}) => {
  return (
    <div>
      {isColor ? (
        <ColorDiv>
          <ShowColorDiv1>
            <img src={enabled} alt="" />
          </ShowColorDiv1>
          <ShowColorDiv2>
            <img src={enabled} alt="" />
          </ShowColorDiv2>
          <ShowColorDiv3>
            <img src={enabled} alt="" />
          </ShowColorDiv3>
          <ShowColorDiv4>
            <img src={enabled} alt="" />
          </ShowColorDiv4>
        </ColorDiv>
      ) : (
        <ImgDiv>
          {/* 왜 {} 사용하면안되나?   */}
          {backgroundImgs.map((img, index) => (
            <ShowImgDiv key={index} src={img}>
              <img src={enabled} alt="" />
            </ShowImgDiv>
          ))}
        </ImgDiv>
      )}
    </div>
  );
};

export default CppShowDiv;
