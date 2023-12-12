import StyledSection from './StyledSection';
import ToggleArrow from '../assets/images/toggle-arrow-down.svg';

/* const RELATIONSHIP = ['친구', '지인', '동료', '가족'];
const FONTS = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체']; */

const ToggleDownSection = ({ children, options }) => {
  if (options === 'relationship') {
    return (
      <StyledSection>
        <label htmlFor={options}>{children}</label>
        <button type="button">
          지인
          <img src={ToggleArrow} alt="드롭다운 화살표 이미지" />
        </button>
        <ul>
          <li>친구</li>
          <li>지인</li>
          <li>동료</li>
          <li>가족</li>
        </ul>
      </StyledSection>
    );
  }
  return (
    <StyledSection>
      <label htmlFor={options}>{children}</label>
      <button type="button">
        Noto Sans
        <img src={ToggleArrow} alt="드롭다운 화살표 이미지" />
      </button>
      <ul>
        <li>Noto Sans</li>
        <li>Pretendard</li>
        <li>나눔명조</li>
        <li>나눔손글씨 손편지체</li>
      </ul>
    </StyledSection>
  );
};

export default ToggleDownSection;
