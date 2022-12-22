// // lecture 2 Project Setup
// export const RQSuperHeroesPage = () => {
//   return <div>RQSuperHeroesPage</div>;
// };

// lecture 3 fetching data with useQuery
// import axios from 'axios';
// import { useQuery } from 'react-query';

// export const RQSuperHeroesPage = () => {
//   // const result = useQuery('super-heroes', () => {
//   // we can destructure  the result
//   const { isLoading, data } = useQuery('super-heroes', () => {
//     return axios.get('http://localhost:4000/superheroes');
//   });

//   if (isLoading) {
//     return <h2>... is Loading</h2>;
//   }
//   return (
//     <>
//       {data?.data.map((hero) => {
//         return <h3 key={hero.name}>{hero.name}</h3>;
//       })}
//     </>
//   );
// };

// // fetcher function outside
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// export const RQSuperHeroesPage = () => {
//   // const result = useQuery('super-heroes', () => {
//   // we can destructure  the result
//   const { isLoading, data } = useQuery('super-heroes', fetchHeroes);

//   if (isLoading) {
//     return <h2>... is Loading</h2>;
//   }
//   return (
//     <>
//       {data?.data.map((hero) => {
//         return <h3 key={hero.name}>{hero.name}</h3>;
//       })}
//     </>
//   );
// };

// lecture 4 handling query error
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchHeroes = () => {
  return axios.get('http://localhost:4000/superheroes111');
};

export const RQSuperHeroesPage = () => {
  // const result = useQuery('super-heroes', () => {
  // we can destructure  the result
  const { isLoading, data, isError, error } = useQuery(
    'super-heroes',
    fetchHeroes
  );

  if (isLoading) {
    return <h2>... is Loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      {data?.data.map((hero) => {
        return <h3 key={hero.name}>{hero.name}</h3>;
      })}
    </>
  );
};
