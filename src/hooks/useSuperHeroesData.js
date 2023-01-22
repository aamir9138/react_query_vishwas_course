// /* lecture 13 Custom Query Hook */
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// export const useSuperHeroesData = (onSuccess, onError) => {
//   return useQuery('super-heroes', fetchHeroes, {
//     onSuccess,
//     onError,
//     select: (data) => {
//       const superHeroNames = data.data.map((hero) => hero.name);
//       return superHeroNames;
//     },
//   });
// };

/* lecture 14 Query by Id */
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchHeroes, {
    onSuccess,
    onError,
    // comment out this as we need other things also not just name
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};
