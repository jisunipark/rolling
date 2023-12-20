const BASE_URL = 'https://rolling-api.vercel.app/';
const BASE_QUERY = '2-8/';

// 롤링페이퍼주인장 Fetch.
const QuestionPersonFetch = async (id) => {
  const response = await fetch(`${BASE_URL}${BASE_QUERY}recipients/${id}/`);
  const result = response.json();

  return result;
};

// GET https://rolling-api.vercel.app/0-3/recipients/2/messages/?limit=3&offset=1
// ?? 값에 limit만큼의 값 넣기.
// export const MessageListFetch = async (id) => {
//   const response = await fetch(
//     `${BASE_URL}${BASE_QUERY}recipients/${id}/messages/?limit=6&offset=${??}`,
//   );
//   const result = response.json();
//   return result;
// };

export default QuestionPersonFetch;
