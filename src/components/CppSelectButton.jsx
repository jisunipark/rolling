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
    padding: 5px 14px;
    border: 2px solid #861dee;
    color: #861dee;
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
