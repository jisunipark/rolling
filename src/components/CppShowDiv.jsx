import { styled } from 'styled-components';
// eslint-disable-next-line
import cppCheck from '../assets/images/cppCheck.svg';

const ColorDiv = styled.div`
  margin: 45px 0;
  display: flex;
  justify-content: space-between;
`;

const ImgDiv = styled(ColorDiv)`
  flex-wrap: wrap;
  gap: 16px;
`;

const ShowColorDiv = styled.div`
  background-color: blue;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  transition: all 1s;
  img {
    transition: all 1s;
    display: none;
  }
  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: flex;
      background-color: #555;
      padding: 10px;
      border-radius: 50%;
    }
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
            <img src={cppCheck} alt="" />
          </ShowColorDiv>
          <ShowColorDiv>
            <img src={cppCheck} alt="" />
          </ShowColorDiv>
          <ShowColorDiv>
            <img src={cppCheck} alt="" />
          </ShowColorDiv>
          <ShowColorDiv>
            <img src={cppCheck} alt="" />
          </ShowColorDiv>
        </ColorDiv>
      ) : (
        <ImgDiv>
          <ShowImgDiv>
            <img src={cppCheck} alt="" />
          </ShowImgDiv>
          <ShowImgDiv>
            <img src={cppCheck} alt="" />
          </ShowImgDiv>
          <ShowImgDiv>
            <img src={cppCheck} alt="" />
          </ShowImgDiv>
          <ShowImgDiv>
            <img src={cppCheck} alt="" />
          </ShowImgDiv>
        </ImgDiv>
      )}
    </div>
  );
};

export default CppShowDiv;
