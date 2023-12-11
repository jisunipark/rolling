import { useEffect, useState } from 'react';
import HeaderUser from './HeaderCss/layoutTest/Header_service';
import Card from './MessageListPage/CardList';
import Headers from './MessageListPage/Header';
import FetchBackGround from '../Api/api';
import Main from './HeaderCss/layoutTest/Main';

const MessageListPage = () => {
  const [backimg, setBackimg] = useState(null);
  const fetchBackGroundImg = async () => {
    try {
      const { imageUrls } = await FetchBackGround();
      //
      setBackimg(imageUrls);
    } catch (error) {
      console.error('NON BackGroundImg', error);
    }
  };

  useEffect(() => {
    console.log(fetchBackGroundImg());
  }, []);

  return (
    <div>
      <Headers />
      <HeaderUser />
      <Main backimg={backimg}>
        <Card />
      </Main>
    </div>
  );
};

export default MessageListPage;
