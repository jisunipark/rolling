import StyledSection from './StyledSection';

const TextInputSection = ({ children }) => {
  return (
    <StyledSection>
      <label htmlFor="sender">{children}</label>
      <input type="text" id="sender" placeholder="이름을 입력해 주세요." />
    </StyledSection>
  );
};

export default TextInputSection;
