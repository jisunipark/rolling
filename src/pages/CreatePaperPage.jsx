import { styled } from 'styled-components';
import { useState } from 'react';
import CppNameInput from '../components/CppNameInput';
import CppCreateButton from '../components/CppCreateButton';
import CppSelectButton from '../components/CppSelectButton';
import CppShowDiv from '../components/CppShowDiv';

const CppForm = styled.form``;

const CppTopBox = styled.div`
  width: 720px;
  margin: 0 auto;
  & p {
    font-size: 24px;
    font-weight: 700;
    line-height: 42px; /* 175% */
    letter-spacing: -0.24px;
    margin-bottom: 12px;
  }
`;
const CppBotBox = styled.div`
  width: 720px;
  margin: 50px auto 0;

  & .text_box .title {
    color: #181818;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.24px;
  }
  & .text_box .text {
    color: #555;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.16px;
  }
`;

const CreatePaperPage = () => {
  const [isColor, setisColor] = useState(true);
  return (
    <main>
      <CppForm>
        <CppTopBox className="recipient_name">
          <p>To.</p>
          <CppNameInput />
        </CppTopBox>
        <CppBotBox>
          <div className="text_box">
            <p className="title">배경화면을 선택해 주세요.</p>
            <p className="text">
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </p>
          </div>
          <div>
            <CppSelectButton setisColor={setisColor} />
            <CppShowDiv isColor={isColor} />
            {/* true */}
          </div>
          <CppCreateButton />
        </CppBotBox>
      </CppForm>
    </main>
  );
};

export default CreatePaperPage;
