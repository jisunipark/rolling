const BASE_URL = 'https://rolling-api.vercel.app/';
const BASE_QUERY = '2-8/';

// 롤링페이퍼주인장 Fetch.
export const QuestionPersonFetch = async (id) => {
  const response = await fetch(`${BASE_URL}${BASE_QUERY}recipients/${id}/`);
  const result = response.json();
  return result;
};

// 메시지 받아오기
export const MessagePersonFetch = async (id) => {
  const response = await fetch(
    `${BASE_URL}${BASE_QUERY}/recipients/${id}/messages/?limit=8&offset=8`,
  );
  const result = response.json();
  return result;
};

// 롤링페이퍼주인장 삭제하기.
export const QuestionDeleteFetch = async (id) => {
  const response = await fetch(`${BASE_URL}${BASE_QUERY}recipients/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

// 휴지통 버튼클릭시 메시지 삭제하기.
export const MessageDeleteFetch = async (id) => {
  const response = await fetch(`${BASE_URL}${BASE_QUERY}messages/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

// {id: 1932
// {id: 1931,
// {id: 1929,
// {id: 1927
// {id: 1919
// {id: 1918,
// {id: 1916

// export default { QuestionDeleteFetch, QuestionPersonFetch };

// GET https://rolling-api.vercel.app/0-3/recipients/2/messages/?limit=3&offset=1
// ?? 값에 limit만큼의 값 넣기.
// const MessageListFetch = async (id) => {
//   const response = await fetch(
//     `${BASE_URL}${BASE_QUERY}recipients/${id}/messages/?limit=6&offset=${??}`,
//   );
//   const result = response.json();
//   return result;
// };
