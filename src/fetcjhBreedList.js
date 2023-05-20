const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal) return[];
  const resApi = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!resApi.ok) {
    throw new Error('fetch not okay');
  }
  return resApi.json();
};
export default fetchBreedList;
