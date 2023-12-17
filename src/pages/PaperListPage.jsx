import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Mock from './mock.json';
import RollingPapers from '../components/RollingPapers';

const ButtonArea = styled.div`
  display: flex;
  position: sticky;
  bottom: 0px;
  padding: 24px 20px;

  @media (min-width: 768px) {
    padding: 24px;
  }

  @media (min-width: 1248px) {
    padding: 24px 0;
    justify-content: center;
  }
`;
const ButtonLink = styled(Link)`
  text-align: center;
  font-family: ABeeZee;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.18px;
  display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  display: flex;
  border-radius: 12px;
  width: 100%;
  background: #9935ff;
  color: #fff;

  @media (min-width: 768px) {
    padding: 14px 24px;
    font-family: Pretendard;
    font-weight: 700;
  }

  @media (min-width: 1248px) {
    width: 320px;
    height: 56px;
  }
`;

const PaperListPage = () => {
  const Data = Mock.results;

  const PolularList = Data.toSorted(
    (a, b) => b.recentMessages.length - a.recentMessages.length,
  );

  const RecentList = Data.toSorted(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <>
      <Header hidden="false" />
      <RollingPapers items={PolularList} list="popular" />
      <RollingPapers items={RecentList} />
      <ButtonArea>
        <ButtonLink to="/Post">나도 만들어보기</ButtonLink>
      </ButtonArea>
    </>
  );
};

export default PaperListPage;
