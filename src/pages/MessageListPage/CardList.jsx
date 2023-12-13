import {
  CardContiner,
  CardPaper,
  CardProfile,
  CardProfileSender,
  CardProfileRelationship,
  CardProfileTitle,
  CardProfileFrom,
  CardProfileName,
  CardProfileComment,
  CardProfileCreatedAt,
  CardProfileDeleted,
  CardProfileDeletedButton,
  // HeaderServiceImg,
} from '../Header/MessageListPageCss';
import Data from '../../mock.json';
import Deleted from '../../assets/images/deleted.png';

const CardList = () => {
  const { results } = Data;
  const [{ recentMessages }] = results;

  const { profileImageURL: profileImageURL1 } = recentMessages[0];
  return (
    <CardContiner>
      <CardProfile>
        <CardPaper src={profileImageURL1} alt="프로필이미지" />
        <CardProfileTitle>
          <CardProfileSender>
            <CardProfileFrom>From.</CardProfileFrom>
            <CardProfileName>김동훈</CardProfileName>
          </CardProfileSender>
          <CardProfileRelationship>가족</CardProfileRelationship>
          <CardProfileDeletedButton>
            <CardProfileDeleted src={Deleted} alt="휴지통" />
          </CardProfileDeletedButton>
        </CardProfileTitle>
      </CardProfile>
      <CardProfileComment>
        코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
        하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
        하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
        하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
        하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
        하세요!
      </CardProfileComment>
      <CardProfileCreatedAt>2023.12.13</CardProfileCreatedAt>
    </CardContiner>
  );
};

export default CardList;
