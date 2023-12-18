const BASE_URL = 'https://rolling-api.vercel.app/';

// eslint-disable-next-line consistent-return
const getDataBackgroundImg = async () => {
  try {
    const response = await fetch(`${BASE_URL}background-images/`);
    const body = await response.json();
    console.log(body);
    return body;
  } catch (err) {
    console.log(err.message);
  }
};

export default getDataBackgroundImg;
