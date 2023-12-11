const BASE_URL = 'https://rolling-api.vercel.app/';
const BASE_QUERY = '2-8';

const FetchApi = async () => {
  const response = await fetch(`${BASE_URL}${BASE_QUERY}`);
  return response;
};

export default FetchApi;
