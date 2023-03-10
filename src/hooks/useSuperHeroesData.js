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

// /* lecture 14 Query by Id */
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// export const useSuperHeroesData = (onSuccess, onError) => {
//   return useQuery('super-heroes', fetchHeroes, {
//     onSuccess,
//     onError,
//     // comment out this as we need other things also not just name
//     // select: (data) => {
//     //   const superHeroNames = data.data.map((hero) => hero.name);
//     //   return superHeroNames;
//     // },
//   });
// };

// /* lecture 21 Mutations */
// import axios from 'axios';
// import { useMutation, useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// const addSuperHero = (hero) => {
//   return axios.post(`http://localhost:4000/superheroes`, hero);
// };

// export const useSuperHeroesData = (onSuccess, onError) => {
//   return useQuery('super-heroes', fetchHeroes, {
//     onSuccess,
//     onError,
//     // comment out this as we need other things also not just name
//     // select: (data) => {
//     //   const superHeroNames = data.data.map((hero) => hero.name);
//     //   return superHeroNames;
//     // },
//   });
// };

// export const useAddSuperHeroData = () => {
//   return useMutation(addSuperHero);
// };

// /* lecture 21 Query Invalidation */
// import axios from 'axios';
// import { useMutation, useQuery, useQueryClient } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// const addSuperHero = (hero) => {
//   return axios.post(`http://localhost:4000/superheroes`, hero);
// };

// export const useSuperHeroesData = (onSuccess, onError) => {
//   return useQuery('super-heroes', fetchHeroes, {
//     onSuccess,
//     onError,
//     // comment out this as we need other things also not just name
//     // select: (data) => {
//     //   const superHeroNames = data.data.map((hero) => hero.name);
//     //   return superHeroNames;
//     // },
//   });
// };

// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuperHero, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('super-heroes');
//     },
//   });
// };

/* lecture 23 Handling Mutation Response */
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const fetchHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero) => {
  return axios.post(`http://localhost:4000/superheroes`, hero);
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

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      //  queryClient.invalidateQueries('super-heroes');
      queryClient.setQueryData('super-heroes', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
