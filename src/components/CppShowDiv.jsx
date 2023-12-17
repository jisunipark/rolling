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
  background-color: blue;
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

const ShowImgDiv = styled(ShowColorDiv)`
  background-color: red;
`;

// eslint-disable-next-line
const CppShowDiv = ({isColor}) => {
  return (
    <div>
      {isColor ? (
        <ColorDiv>
          <ShowColorDiv>
            <img src={enabled} alt="" />
          </ShowColorDiv>
          <ShowColorDiv>
            <img src={enabled} alt="" />
          </ShowColorDiv>
          <ShowColorDiv>
            <img src={enabled} alt="" />
          </ShowColorDiv>
          <ShowColorDiv>
            <img src={enabled} alt="" />
          </ShowColorDiv>
        </ColorDiv>
      ) : (
        <ImgDiv>
          <ShowImgDiv>
            <img src={enabled} alt="" />
          </ShowImgDiv>
          <ShowImgDiv>
            <img src={enabled} alt="" />
          </ShowImgDiv>
          <ShowImgDiv>
            <img src={enabled} alt="" />
          </ShowImgDiv>
          <ShowImgDiv>
            <img src={enabled} alt="" />
          </ShowImgDiv>
        </ImgDiv>
      )}
    </div>
  );
};

export default CppShowDiv;
