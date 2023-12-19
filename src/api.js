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

// eslint-disable-next-line consistent-return
export const postUserData = async (sendData) => {
  try {
    const response = await fetch(`${BASE_URL}2-8/recipients/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendData),
    });
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err);
  }
};
