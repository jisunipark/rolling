import { useState } from 'react';
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
} from '../Header/MessageListPageCss';
import Deleted from '../../assets/images/deleted.png';
import Modal from '../../components/Modal';

const CardList = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { relationship, sender, profileImageURL, content, createdAt, font } =
    item;

  const handleModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      {isOpen && <Modal modalDatas={item} setIsOpen={setIsOpen} />}
      <CardContiner onClick={handleModal}>
        <CardProfile>
          <CardPaper src={profileImageURL} alt="프로필이미지" />
          <CardProfileTitle>
            <CardProfileSender>
              <CardProfileFrom>From.</CardProfileFrom>
              <CardProfileName>{sender}</CardProfileName>
            </CardProfileSender>
            <CardProfileRelationship>{relationship}</CardProfileRelationship>
            <CardProfileDeletedButton>
              {/* 이벤트점스탑프로퍼게이션 이거 하면 모달창 상관없이 가능. */}
              {/* 핸들링함수 = (e) => {e.stoPro~~~ + 삭제동작들 하면 됨.} */}
              <CardProfileDeleted src={Deleted} alt="휴지통" />
            </CardProfileDeletedButton>
          </CardProfileTitle>
        </CardProfile>
        <CardProfileComment>{content}</CardProfileComment>
        <CardProfileCreatedAt>{createdAt}</CardProfileCreatedAt>
      </CardContiner>
    </>
  );
};

export default CardList;
