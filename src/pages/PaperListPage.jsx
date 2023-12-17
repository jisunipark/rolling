import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Mock from './mock.json';
import RollingPapers from '../components/RollingPapers';

const ButtonArea = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 24px 0 24px 0;
  justify-content: center;
`;
const ButtonLink = styled(Link)`
  display: flex;
  width: 280px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #9935ff;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.18px;
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
        <ButtonLink>나도 만들어보기</ButtonLink>
      </ButtonArea>
    </>
  );
};

export default PaperListPage;
