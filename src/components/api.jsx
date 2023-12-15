export async function GetItems() {
  const response = await fetch(
    'https://rolling-api.vercel.app/2-8/recipients/',
  );
  const { body } = await response.json();
  return body;
}

export async function GetFolderInformationLinks() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/folder',
  );
  const body = await response.json();
  return body;
}
