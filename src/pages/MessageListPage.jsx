import { useEffect, useState } from 'react';
import HeaderUser from './HeaderCss/layoutTest/Header_service';
import Card from './MessageListPage/CardList';
import Headers from './MessageListPage/Header';
import FetchBackGround from '../Api/api';
import Main from './HeaderCss/layoutTest/Main';

// backimg useState()빈문자열이면 진행이 되는데 왜 null값이면 진행이 안 되지?
// 그리고 백그라운드 이미지는 css로 넣어야할것 같은데.. card가 안 보이네

const MessageListPage = () => {
  const [backimg, setBackimg] = useState('');
  const fetchBackGroundImg = async () => {
    try {
      const { imageUrls } = await FetchBackGround();
      // console.log(imageUrls);
      setBackimg(imageUrls);
      console.log(imageUrls);
    } catch (error) {
      console.error('NON BackGroundImg', error);
    }
  };

  useEffect(() => {
    fetchBackGroundImg();
  }, []);
  return (
    <>
      <div>
        <Headers />
        <HeaderUser />
      </div>
      <Main backimg={backimg}>
        <Card />
      </Main>
    </>
  );
};

export default MessageListPage;
