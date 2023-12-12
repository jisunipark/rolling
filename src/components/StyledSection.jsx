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
  & textarea,
  & button {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  & input:focus,
  & textarea:focus {
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
  }

  & li:hover {
    background-color: #f6f6f6;
  }

  & ul {
    width: 320px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    /* display: none; */
  }

  & textarea {
    position: relative;
    width: 720px;
    height: 260px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
`;

export default StyledSection;
