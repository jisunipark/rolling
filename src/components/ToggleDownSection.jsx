import { useState, useRef, useEffect } from 'react';
import StyledSection from './StyledSection';
import ToggleArrow from '../assets/images/toggle-arrow-down.svg';

const relationship = ['친구', '지인', '동료', '가족'];
const fonts = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];

const ToggleDownSection = ({ children, options, last }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('지인');
  const buttonRef = useRef();
  const listRef = useRef();

  const handleOptions = (e) => {
    setIsOpen(!isOpen);
    e.target.classList.toggle('focus');
  };

  // TODO 선택한 요소로 바뀌도록
  const selectOption = (e) => {
    setSelected(e.target.textContent);
    setIsOpen(false);
  };

  return (
    <StyledSection last={last}>
      <label htmlFor={options}>{children}</label>
      <button type="button" onClick={handleOptions} ref={buttonRef}>
        {selected}
        <img src={ToggleArrow} alt="드롭다운 화살표 이미지" />
      </button>
      <div className="toggle-options">
        {isOpen && (
          <ul>
            {relationship.map((option, index) => {
              // TODO 여기의 relationship을 어떻게 fonts로도 바꿀 수 있을지..
              return (
                <li
                  onClick={selectOption}
                  onKeyDown={selectOption}
                  ref={listRef}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </StyledSection>
  );
};

export default ToggleDownSection;

/* TODO
1. 마지막 토글에 last toggle 클래스 추가
2. 클릭하는 요소로 값이 바뀌도록

*/
