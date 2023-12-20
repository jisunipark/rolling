import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { StyledSection } from './style';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  [{ align: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ color: [] }, { background: [] }],
];

export const formats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'align',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'background',
  'color',
  'link',
  'width',
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};

const Editor = ({ initialValue = '' }) => {
  const [quillValue, setQuillValue] = useState(initialValue);

  const handleOnChange = (value) => {
    setQuillValue(value);
  };

  return (
    <ReactQuill
      value={quillValue}
      theme="snow"
      modules={modules}
      formats={formats}
      onChange={handleOnChange}
    />
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
