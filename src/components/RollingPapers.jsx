import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftArrow from '../assets/images/arrow_left.svg';
import RightArrow from '../assets/images/arrow_right.svg';
import RollingPaperSummary from './RollingPaperSummary';

const StyledRollingPapers = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  & main {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 12px;
    padding: 40px 20px;

    @media (min-width: 768px) {
      gap: 16px;
      padding-top: 50px;
      padding-left: 24px;
    }
    @media (min-width: 1248px) {
      padding-top: 50px;
    }

    & .grids {
      position: relative;
      display: flex;
      flex-direction: row;
      gap: 12px;
      width: 100%;

      @media (min-width: 768px) {
        gap: 20px;
        width: 100%;
      }
      @media (min-width: 1248px) {
        max-width: 1160px;
      }

      & button {
        position: absolute;
        top: 50%;
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        fill: rgba(255, 255, 255, 0.9);
        stroke-width: 1px;
        stroke: #dadcdf;
        filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
        backdrop-filter: blur(2px);
      }
      & .before {
        left: -20px;
      }
      & .next {
        right: -20px;
      }
    }
    & p {
      display: flex;
      flex-direction: row;
    }
  }
`;

const RollingPapers = ({ items, list }) => {
  return (
    <StyledRollingPapers>
      <main id="myContainer">
        {list ? <p>인기 롤링 페이퍼 🔥</p> : <p>최근에 만든 롤링 페이퍼 ⭐️</p>}
        <div className="grids">
          <button className="before" type="button">
            <img src={LeftArrow} alt="좌측 화살표" />
          </button>
          {items.map((item) => {
            return <RollingPaperSummary key={item.id} item={item} />;
          })}
          <button className="next" type="button">
            <img src={RightArrow} alt="우측 화살표" />
          </button>
        </div>
      </main>
    </StyledRollingPapers>
  );
};

export default RollingPapers;
