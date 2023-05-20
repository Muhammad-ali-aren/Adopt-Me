const fetchPets = async ({ queryKey }) => {
  const id = queryKey[1];

  const resApi = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!resApi.ok) {
    throw new Error('fetch not okay');
  }
  return resApi.json();
};
export default fetchPets;
