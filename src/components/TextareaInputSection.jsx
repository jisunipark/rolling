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

const TextSettingBar = styled.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 12px 15px;
  width: 718px;
  height: 49px;
  border-radius: 8px 8px 0px 0px;
  background-color: #eee;
  gap: 14px;
`;

const TextareaInputSection = ({ children }) => {
  return (
    <StyledSection>
      <label htmlFor="content">{children}</label>
      <TextSettingBar>
        <div>
          <img src={TextBold} alt="bold" />
          <img src={TextItalic} alt="italic" />
          <img src={TextUnderlined} alt="underlined" />
        </div>
        <div>
          <img src={AlignmentCenter} alt="alignment center" />
          <img src={AlignmentRight} alt="alignmnet right" />
          <img src={AlignmentBoth} alt="alignment both" />
        </div>
        <div>
          <img src={UnorderedList} alt="unordered list" />
          <img src={OrderedList} alt="ordered list" />
        </div>
        <div>
          <img src={FontIcon} alt="font icon" />
        </div>
      </TextSettingBar>
      <textarea id="content" />
    </StyledSection>
  );
};

export default TextareaInputSection;
