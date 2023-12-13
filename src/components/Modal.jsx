import styled from 'styled-components';

import SampleImage from '../assets/images/home-emoji.png';

const Modal = () => {
  return (
    <Wrapper>
      <Container>
        <ModalHeader>
          <WriterArea>
            <ProfileImage src={SampleImage} alt="profile" />
            <div>
              <Writer>
                From. <span>김동훈</span>
              </Writer>
              <RelationShip>동료</RelationShip>
            </div>
          </WriterArea>
          <Date>2023.07.08</Date>
        </ModalHeader>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

const Container = styled.div`
  width: 600px;
  height: 476px;
  background-color: #fff;
  flex-shrink: 0;
  border-radius: 16px;
  padding: 40px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WriterArea = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

const Writer = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  & span {
    font-weight: 700;
  }
`;

const RelationShip = styled.div`
  width: fit-content;
  padding: 0 8px;
  background-color: #f8f0ff;
  color: #9935ff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const Date = styled.div`
  color: #999;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

export default Modal;
