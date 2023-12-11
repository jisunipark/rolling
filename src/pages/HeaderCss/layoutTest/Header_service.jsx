import ArrowDown from '../../../assets/images/arrow_down.png';
import ArrowAdd from '../../../assets/images/add-24.png';
import Share from '../../../assets/images/share-24.png';

const HeaderUser = () => {
  return (
    <div>
      <h2>To.Name</h2>
      <p>이미지여러개</p>
      <p>
        <b>여러</b>명이 작성했어요!
      </p>
      <p>엄지</p>
      <p>눈하트</p>
      <p>폭죽</p>
      <img src={ArrowDown} alt="이모티콘배열" />
      <div>
        <img src={ArrowAdd} alt="이모티콘추가" />
        추가
      </div>
      <img src={Share} alt="URL복사" />
    </div>
  );
};

export default HeaderUser;
