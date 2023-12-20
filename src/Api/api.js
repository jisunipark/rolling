const getInformationLIke = async () => {
  try {
    const response = await fetch(
      'https://rolling-api.vercel.app/2-8/recipients/?limit=10&sort=like',
    );
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }

  return;
};

const getInformation = async () => {
  try {
    const response = await fetch(
      'https://rolling-api.vercel.app/2-8/recipients/?limit=10',
    );
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }

  return;
};

export { getInformationLIke };
export { getInformation };
