import { useState } from 'react';
import StyledSection from './StyledSection';
import ToggleArrow from '../assets/images/toggle-arrow-down.svg';

const relationship = ['친구', '지인', '동료', '가족'];
const fonts = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];

/* 버튼 변수 만들기 - button
버튼에 이벤트 핸들러 등록 - toggleOptions
	드롭다운 메뉴 중 하나 선택하면 버튼이 선택한 메뉴로 바뀌는

1. 버튼을 클릭한다
2. 드롭다운 메뉴가 열린다
3. 드롭다운 메뉴 중 하나를 선택한다
4. 버튼이 선택한 메뉴로 바뀐다 */

const ToggleDownSection = ({ children, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('지인');

  const handleOptions = () => {
    setIsOpen(!isOpen);
  };

  // TODO 선택한 요소로 바뀌도록
  /*   const selectOption = (index) => {
    setSelected(index);
  }; */

  return (
    <StyledSection>
      <label htmlFor={options}>{children}</label>
      <button type="button" onClick={handleOptions}>
        지인
        <img src={ToggleArrow} alt="드롭다운 화살표 이미지" />
      </button>
      {isOpen && (
        <ul>
          {relationship.map((option, index) => {
            // TODO 여기의 relationship을 어떻게 fonts로도 바꿀 수 있을지..
            return <li>{option}</li>;
          })}
        </ul>
      )}
    </StyledSection>
  );
};

export default ToggleDownSection;
