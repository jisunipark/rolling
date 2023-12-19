import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & label {
    color: #181818;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }

  & input,
  & button {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    line-height: 26px;
    cursor: pointer;
  }

  & input:focus,
  & button.focus {
    border: 2px solid #555;
  }

  & input::placeholder,
  & button {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
  }

  & input {
    width: 100%;
  }

  & input.error {
    border: 1px solid #dc3a3a;
  }

  & button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;
    background-color: #fff;
  }

  & li {
    padding: 12px 16px;
    color: #555;
    line-height: 26px;
  }

  & li:hover {
    background-color: #f6f6f6;
  }

  & .toggle-options {
    position: relative;
    margin: 0;
    padding: 0;
  }

  & ul {
    position: ${(props) => (props.last ? 'static' : 'absolute')};
    width: 320px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    /* &.last-toggle {
      position: static;
    } */
  }

  & p {
    display: none;
    &.error {
      display: block;
      margin-top: 4px;
      color: #dc3a3a;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    }
  }

  &.toggle-optons > button {
    margin: 0;
    padding: 0;
    width: auto;
    border: 0;
    border-radius: 0;
    line-height: 0;
    background-color: transparent;
  }

  & button > img {
    width: 16px;
    height: 16px;
  }

  & .selected-profile-img {
    width: 80px;
    height: 80px;
    border-radius: 100px;
  }

  & .quill {
    width: 720px;
  }

  & .ql-toolbar {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    width: 100%;
    height: 49px;
    border-radius: 8px 8px 0px 0px;
    background: #eee;
    gap: 14px;

    & .ql-formats {
      display: flex;
      padding: 0;
      margin: 0;
      gap: 2px;
    }
  }

  & .ql-container {
    width: 100%;
    height: 211px;
    padding: 16px;
    border-radius: 0px 0px 8px 8px;
    resize: none;

    & .ql-editor {
      padding: 0;
    }
  }
`;

export default StyledSection;
