import Icon from '../assets/images/Icon.png';
import { Header, HeaderFont, HeaderGap } from './HeaderCss/MessageListPageCss';

const MessageListPage = () => {
  return (
    <Header>
      <HeaderGap>
        <img src={Icon} alt="로고" />
        <HeaderFont>Rolling</HeaderFont>
      </HeaderGap>
    </Header>
  );
};

export default MessageListPage;
