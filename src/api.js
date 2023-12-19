const BASE_URL = 'https://rolling-api.vercel.app/';

// eslint-disable-next-line consistent-return
export const getDataBackgroundImg = async () => {
  try {
    const response = await fetch(`${BASE_URL}background-images/`);
    const body = await response.json();
    console.log(body);
    return body;
  } catch (err) {
    console.log(err.message);
  }
};

// 파라미터로 formData를 받겠다.
export const postUserData = async (formData) => {
  const response = await fetch(`${BASE_URL}2-8/recipients/`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('리뷰를 불러오는데 실패함');
  }
  const body = await response.json();
  return body;
};

// 새 직원 정보는 원하는 대로 작성하세요
// const CppUserData = {
//   team: 'string',
//   name: 'string',
//   backgroundColor: 'beige',
//   backgroundImageURL: 'string',
// };
// fetch('https://learn.codeit.kr/api/members', {
//   method: 'POST',
//   body: JSON.stringify(CppUserData),
// })
//   .then(() => {
//     fetch('https://learn.codeit.kr/api/members')
//       .then((response) => response.text())
//       .then((result) => {
//         const members = JSON.parse(result);
//         console.log(members[members.length - 1]);
//       });
//   });
