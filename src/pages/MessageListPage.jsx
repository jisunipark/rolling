import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderUser from './Header/Header_service';
import Main from './Main/Main';
// import Mock from '../mock.json';
import Header from '../components/Header';
import QuestionPersonFetch from '../Api/api';

const MessageListPage = () => {
  const [Data, setData] = useState([]);

  const pill = async (userid) => {
    const gyeom = await QuestionPersonFetch(userid);
    setData(gyeom);
  };

  const { id } = useParams();

  useEffect(() => {
    pill(id);
  }, []);

  return (
    <>
      <Header hidden="true" />
      <HeaderUser />
      <Main Data={Data} />
    </>
  );
};

export default MessageListPage;
