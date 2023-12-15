import HeaderUser from './Header/Header_service';
import Headers from './Header/Header';
import Main from './MessageListPage/Main';
// import { MainContent } from './Header/MessageListPageCss';

const MessageListPage = () => {
  return (
    <>
      <Headers />
      <HeaderUser />
      <Main />
    </>
  );
};

export default MessageListPage;
