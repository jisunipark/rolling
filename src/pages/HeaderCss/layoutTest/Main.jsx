import { styled } from 'styled-components';

// const BackImgs = styled.div`
// background-image: url(${props => props.path });
// `
const YourComponent = styled.div`
  background-image: url(${(props) => props.backimg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 700px;
`;

// const Main = ({ backimg }) => {
//   console.log(backimg[0]);
//   return <YourComponent backimg={backimg[0]} />;
// };

const Main = ({ backimg }) => {
  if (!backimg[0]) {
    // 이미지가 로드되지 않았을 때의 렌더링
    return <div>Loading...</div>;
  }

  // 이미지가 로드된 후의 렌더링
  console.log(backimg[0]);
  return <YourComponent backimg={backimg[0]} />;
};

export default Main;
