import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import RollingPaperSummary from './RollingPaperSummary';
import LeftArrow from '../assets/images/arrow_left.svg';
import RightArrow from '../assets/images/arrow_right.svg';
import Circle from '../assets/images/Circle.svg';

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
    overflow: hidden;

    @media (min-width: 768px) {
      gap: 16px;
      padding: 50px 24px 20px 24px;
      margin-left: 24px;
    }
    @media (min-width: 1248px) {
      padding: 50px 20px 20px 20px;
    }

    & .title {
      color: #000;
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: -0.24px;
    }

    & .grids {
      position: relative;
      width: 100%;

      & .sliders {
        display: flex;
        flex-direction: row;
        gap: 12px;

        @media (min-width: 768px) {
          gap: 20px;
          width: 100%;
          max-width: 1160px;
        }
        @media (min-width: 1248px) {
          transition: all 0.5s;
          transition-timing-function: cubic-bezier(0, 0.99, 0.58, 1);
          max-width: 1160px;
          gap: 20px;
        }
      }
      & button {
        position: absolute;
        z-index: 2;
        top: 50%;
        bottom: 50%;
        transform: translate(-50%, -50%);
        width: 39px;
        height: 40px;
        flex-shrink: 0;
        border: none;
        fill: rgba(255, 255, 255, 0.9);
        stroke-width: 1px;
        stroke: #dadcdf;
        filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
        backdrop-filter: blur(2px);
        transition:
          opacity 0.3s ease,
          transform 0.3s ease;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.1);

        opacity: 0.8;

        &:hover {
          opacity: 1;
          /* transform: scale(1.1);
          transition: transform 0.1s ease-in-out; */
        }
      }
      & .before {
        transform: translate(-50%, -50%);
      }
      & .next {
        transform: translate(0, -50%);
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider = useRef();
  const sliderBtnLeft = useRef();
  const sliderBtnRight = useRef();

  function updateButtonVisibility() {
    if (sliderBtnLeft.current) {
      sliderBtnLeft.current.style.display =
        currentIndex === 0 ? 'none' : 'block';
    }

    if (sliderBtnRight.current) {
      const lastVisibleIndex = items.length - 4;
      sliderBtnRight.current.style.display =
        currentIndex === lastVisibleIndex ? 'none' : 'block';
    }
  }
  useEffect(() => {
    // 슬라이더 및 버튼 가시성 초기화
    updateButtonVisibility();
  }, []);

  useEffect(() => {
    // currentIndex가 변경될 때 버튼 가시성 업데이트
    updateButtonVisibility();
  }, [currentIndex]);

  function moveSlider(direction) {
    const slideWidth = slider.current.querySelector('.slide').offsetWidth + 20;

    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (direction === 'right' && currentIndex < items.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }

  useEffect(() => {
    // currentIndex 또는 items가 변경될 때 슬라이더 위치 업데이트
    const slideWidth = slider.current.querySelector('.slide').offsetWidth + 20;
    console.log(slideWidth);
    const translateXValue = -currentIndex * slideWidth;
    console.log(translateXValue);

    slider.current.style.transform = `translateX(${translateXValue}px)`;
  }, [currentIndex, items]);

  return (
    <StyledRollingPapers>
      <main>
        {list ? (
          <p className="title">인기 롤링 페이퍼 🔥</p>
        ) : (
          <p className="title">최근에 만든 롤링 페이퍼 ⭐️</p>
        )}
        <div className="grids">
          <button
            onClick={() => moveSlider('left')}
            ref={sliderBtnLeft}
            className="before"
            type="button"
          >
            <img src={LeftArrow} alt="좌측 화살표" />
          </button>
          <div className="sliders" ref={slider}>
            {items.map((item) => {
              return (
                <RollingPaperSummary
                  className="slide"
                  key={item.id}
                  item={item}
                />
              );
            })}
          </div>
          <button
            src={Circle}
            onClick={() => moveSlider('right')}
            ref={sliderBtnRight}
            className="next"
            type="button"
          >
            <img src={RightArrow} alt="우측 화살표" />
          </button>
        </div>
      </main>
    </StyledRollingPapers>
  );
};

export default RollingPapers;
