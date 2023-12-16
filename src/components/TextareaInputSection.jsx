import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import StyledSection from './StyledSection';

// React Quill 라이브러리 사용 https://www.npmjs.com/package/react-quill?activeTab=readme
const Editor = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </>
  );
};

const TextareaInputSection = ({ children }) => {
  return (
    <StyledSection>
      <label htmlFor="content">{children}</label>
      <Editor />
    </StyledSection>
  );
};

export default TextareaInputSection;
