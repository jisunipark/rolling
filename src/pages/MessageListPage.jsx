import HeaderUser from './Header/Header_service';
import Headers from './Header/Header';
import Main from './MessageListPage/Main';
import { MainContent } from './Header/MessageListPageCss';

const MessageListPage = () => {
  return (
    <MainContent>
      <Headers />
      <HeaderUser />
      <Main />
    </MainContent>
  );
};

export default MessageListPage;
