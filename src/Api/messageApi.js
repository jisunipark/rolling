const BASE_URL = 'https://rolling-api.vercel.app/';

const fetchProfileImg = async () => {
  const response = await fetch(`${BASE_URL}profile-images/`);
  const data = response.json();
  return data;
};

// eslint-disable-next-line import/prefer-default-export
export { fetchProfileImg };
