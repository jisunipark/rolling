import { styled } from 'styled-components';

const NameInput = styled.input`
  width: 720px;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  ::placeholder {
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.16px;
  }
`;

const CppNameInput = () => {
  return <NameInput placeholder="받는 사람 이름을 입력해 주세요" />;
};

export default CppNameInput;
