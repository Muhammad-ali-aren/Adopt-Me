import { useEffect, useState } from 'react';

import useBreedList from './useBreedList';
import Results from './Results';
import fetchSearch from './fetchSearch';
import { useQuery } from '@tanstack/react-query';
const ANIMALS = ['birds', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [reuqestParams, setRequestParams] = useState({
    location: '',
    breed: '',
    animal: '',
  });
  const [animal, setAnimal] = useState('');

  const [breeds] = useBreedList(animal);
  const results = useQuery(['search', reuqestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            location: formData.get('location') ?? '',
            breed: formData.get('breed') ?? '',
            animal: formData.get('animal') ?? '',
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            placeholder="location"
            autoComplete="off"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select disabled={breeds.length === 0} name="breed" id="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
