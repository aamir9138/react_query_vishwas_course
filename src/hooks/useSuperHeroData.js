/* lecture 14 Query by id */
// import { useQuery } from 'react-query';
// import axios from 'axios';
// const fetchSuperHero = (heroId) => {
//   return axios.get(`http://localhost:4000/superheroes/${heroId}`);
// };
// export const useSuperHeroData = (heroId) => {
//   return useQuery(['super-hero', heroId], () => fetchSuperHero(heroId));
// };

// using queyKey in fetcher function
import { useQuery } from 'react-query';
import axios from 'axios';
const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1]; // queryKey is the array passed to useQuery(['super-hero', heroId])
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export const useSuperHeroData = (heroId) => {
  return useQuery(['super-hero', heroId], fetchSuperHero);
};
