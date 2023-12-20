import { styled } from 'styled-components';
import CardListUl from './CardListUl';

const MainContent = styled.div`
  position: relative;
  background-color: ${({ Data }) => Data?.backgroundColor || 'transparent'};
  background-image: ${({ Data }) =>
    Data?.backgroundColor ? 'none' : `url(${Data?.backgroundImageURL})`};
  width: 100%;
  height: 1080px;
  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;

const Main = ({ Data }) => {
  return (
    <MainContent Data={Data}>
      <CardListUl Data={Data} />
    </MainContent>
  );
};

export default Main;
