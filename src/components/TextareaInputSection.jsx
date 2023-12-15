import { useRef, forwardRef } from 'react';
import styled from 'styled-components';
import StyledSection from './StyledSection';
// textarea 메뉴
import TextBold from '../assets/images/text-bold.svg';
import TextItalic from '../assets/images/text-italic.svg';
import TextUnderlined from '../assets/images/text-underlined.svg';
import AlignmentBoth from '../assets/images/alignment-both.svg';
import AlignmentRight from '../assets/images/alignment-right.svg';
import AlignmentCenter from '../assets/images/alignment-center.svg';
import UnorderedList from '../assets/images/unordered-list.svg';
import OrderedList from '../assets/images/ordered-list.svg';
import FontIcon from '../assets/images/font.svg';

const StyledTextSettingBar = styled.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 12px 15px;
  margin: 0;
  width: 718px;
  height: 49px;
  border-radius: 8px 8px 0px 0px;
  background-color: #eee;
  gap: 14px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  & button {
    margin: 0;
    padding: 0;
    width: auto;
    border: 0;
    border-radius: 0;
    line-height: 0;
    background-color: transparent;
  }
`;
/*
  1. 클릭한 요소의 이름대로 textarea의 폰트가 바뀌는 함수 (changeStyle)
    1. 이벤트 객체를 받아와야 함
    2. 이벤트 객체의 타겟의 이름 프로퍼티를 받아야 함
    3. 그걸 textarea에 전달해야 됨 (style이라는 프롭)
  2. 클릭을 할 때 실행 (onClick={changeStyle})
    클릭 시 토글 -> add or remove style={{~~}}
*/

const addStyle = (textarea) => {
  console.log('clicked!');
};

const TextSettingBar = ({ textarea }) => {
  return (
    <StyledTextSettingBar>
      <Div>
        <button type="button" onClick={addStyle(textarea)}>
          <img src={TextBold} alt="bold" />
        </button>
        <img src={TextItalic} alt="italic" />
        <img src={TextUnderlined} alt="underlined" />
      </Div>
      <Div>
        <button type="button" onClick={addStyle}>
          <img src={AlignmentCenter} alt="alignment center" />
        </button>
        <img src={AlignmentRight} alt="alignmnet right" />
        <img src={AlignmentBoth} alt="alignment both" />
      </Div>
      <Div>
        <img src={UnorderedList} alt="unordered list" />
        <img src={OrderedList} alt="ordered list" />
      </Div>
      <Div>
        <img src={FontIcon} alt="font icon" />
      </Div>
    </StyledTextSettingBar>
  );
};

const Textarea = forwardRef((props, ref) => {
  return <textarea id="content" ref={ref} />;
});

const TextareaInputSection = ({ children }) => {
  const textareaRef = useRef();

  return (
    <StyledSection>
      <label htmlFor="content">{children}</label>
      <div className="text-editor">
        <TextSettingBar textarea={textareaRef} />
        <Textarea ref={textareaRef} />
      </div>
    </StyledSection>
  );
};

export default TextareaInputSection;
