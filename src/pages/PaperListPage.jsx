import Header from '../components/Header';
import Mock from './mock.json';
import RollingPapers from '../components/RollingPapers';

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
    </>
  );
};

export default PaperListPage;
