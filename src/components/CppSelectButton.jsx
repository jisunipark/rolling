import { styled } from 'styled-components';

const Div = styled.div`
  display: flex;
  margin-top: 24px;
`;

const SelectButton = styled.button`
  box-sizing: content-box;
  background-color: #f6f6f6;
  border: none;
  border-radius: 6px;
  width: 90px;
  padding: 7px 16px;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
  &:hover {
    width: 90px;
    padding: 6px 14px;
    font-weight: 700;
    background-color: #fff;
    border: 2px solid #861dee;
    color: #861dee;
  }
  @media (max-width: 768px) {
    padding: 7px 14px;
    &:hover {
      padding: 5px 12px;
    }
  }
`;
// eslint-disable-next-line
const CppSelectButton = ({ setIsColor}) => {
  const changeType = (type) => {
    setIsColor(type);
  };

  return (
    <Div>
      <SelectButton
        type="button"
        onClick={() => {
          changeType(true);
        }}
      >
        컬러
      </SelectButton>
      <SelectButton
        type="button"
        onClick={() => {
          changeType(false);
        }}
      >
        이미지
      </SelectButton>
    </Div>
  );
};

export default CppSelectButton;
