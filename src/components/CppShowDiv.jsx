/* eslint-disable array-callback-return */
import { styled } from 'styled-components';
import { useState } from 'react';
import enabled from '../assets/images/Enabled.svg';

const COLOR_CHIPS = [
  { id: 1, option: 'beige' },
  { id: 2, option: 'purple' },
  { id: 3, option: 'blue' },
  { id: 4, option: 'green' },
];

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
  @media (max-width: 768px) {
    width: 154px;
    height: 154px;
  }
`;

const ShowImgDiv = styled(ShowColorDiv)`
  background-image: url(${(props) => props.src});
`;

const StyledDiv = styled(ShowColorDiv)`
  &.beige {
    background-color: #ffe2ad;
  }
  &.purple {
    background-color: #ecd9ff;
  }
  &.green {
    background-color: #b1e4ff;
  }
  &.blue {
    background-color: #d0f5c3;
  }
`;

const CppShowDiv = ({ isColor, backgroundImgs }) => {
  const [selectColor, setSelectColor] = useState('beige');
  const handleColorChange = (option) => {
    setSelectColor(option);
  };
  const [selectImg, setSelectImg] = useState(0);
  console.log(selectImg);
  const handleImgChange = (index) => {
    setSelectImg(index);
  };

  return (
    <div>
      {isColor ? (
        <ColorDiv>
          {COLOR_CHIPS.map((item) => (
            <StyledDiv
              key={item.id}
              className={item.option}
              onClick={() => handleColorChange(item.option)}
            >
              {selectColor === item.option && (
                <img src={enabled} alt="체크표시" />
              )}
            </StyledDiv>
          ))}
        </ColorDiv>
      ) : (
        <ImgDiv>
          {backgroundImgs.map((img, index) => (
            <ShowImgDiv
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              src={img}
              onClick={() => handleImgChange(index)}
            >
              {selectImg === index && <img src={enabled} alt="체크표시" />}
            </ShowImgDiv>
          ))}
        </ImgDiv>
      )}
    </div>
  );
};

export default CppShowDiv;
