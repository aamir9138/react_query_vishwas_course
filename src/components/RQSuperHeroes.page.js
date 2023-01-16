// // lecture 2 Project Setup
// export const RQSuperHeroesPage = () => {
//   return <div>RQSuperHeroesPage</div>;
// };

import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

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

// // lecture 4 handling query error
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes111');
// };

// export const RQSuperHeroesPage = () => {
//   // const result = useQuery('super-heroes', () => {
//   // we can destructure  the result
//   const { isLoading, data, isError, error } = useQuery(
//     'super-heroes',
//     fetchHeroes
//   );

//   if (isLoading) {
//     return <h2>... is Loading</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }
//   return (
//     <>
//       {data?.data.map((hero) => {
//         return <h3 key={hero.name}>{hero.name}</h3>;
//       })}
//     </>
//   );
// };

// /* lecture 6 Query Cache */
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// export const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError, error, isFetching } = useQuery(
//     'super-heroes',
//     fetchHeroes,
//     {
//       cacheTime: 5000, // 5sec
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading) {
//     return <h2>... is Loading</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }
//   return (
//     <>
//       {data?.data.map((hero) => {
//         return <h3 key={hero.name}>{hero.name}</h3>;
//       })}
//     </>
//   );
// };

// /* lecture 7 Stale Time */
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// export const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError, error, isFetching } = useQuery(
//     'super-heroes',
//     fetchHeroes,
//     {
//       staleTime: 30000,
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading) {
//     return <h2>... is Loading</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }
//   return (
//     <>
//       {data?.data.map((hero) => {
//         return <h3 key={hero.name}>{hero.name}</h3>;
//       })}
//     </>
//   );
// };

// /* lecture 8 Refetch Defaults */
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// export const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError, error, isFetching } = useQuery(
//     'super-heroes',
//     fetchHeroes,
//     {
//       // refetchOnMount: always // refetch even if it is during staleTime duration means data is fresh yet
//       // refetchOnMount: true, // default refetch but not when data is fresh.
//       refetchOnMount: false, // will not refetch on mount even after stale time

//       // refetchOnWindowFocus: always // refetch even if it is during staleTime duration means data is fresh yet
//       // refetchOnWindowFocus: true, // default refetch but not when data is fresh.
//       refetchOnWindowFocus: false, // will not refetch on window focus even after stale time
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading) {
//     return <h2>... is Loading</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }
//   return (
//     <>
//       {data?.data.map((hero) => {
//         return <h3 key={hero.name}>{hero.name}</h3>;
//       })}
//     </>
//   );
// };

// /* lecture 9 Polling */
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// export const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError, error, isFetching } = useQuery(
//     'super-heroes',
//     fetchHeroes,
//     {
//       // refetchOnMount: always // refetch even if it is during staleTime duration means data is fresh yet
//       // refetchOnMount: true, // default refetch but not when data is fresh.
//       refetchOnMount: false, // will not refetch on mount even after stale time

//       // refetchOnWindowFocus: always // refetch even if it is during staleTime duration means data is fresh yet
//       // refetchOnWindowFocus: true, // default refetch but not when data is fresh.
//       refetchOnWindowFocus: false, // will not refetch on window focus even after stale time

//       // refetchInterval: 2000, // default false, every 2 sec refetch used for polling.
//       // // when the window loses focus it will not refetch
//       // refetchIntervalInBackground: true, // to poll even when window is not focused.
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading) {
//     return <h2>... is Loading</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }
//   return (
//     <>
//       {data?.data.map((hero) => {
//         return <h3 key={hero.name}>{hero.name}</h3>;
//       })}
//     </>
//   );
// };

// /* lecture 10 useQuery on Click */
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// export const RQSuperHeroesPage = () => {
//   const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
//     'super-heroes',
//     fetchHeroes,
//     {
//       enabled: false,
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading || isFetching) {
//     return <h2>... is Loading</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }
//   return (
//     <>
//       <h2>RQ Super Heroes</h2>
//       <button onClick={refetch}>fetch heroes</button>
//       {data?.data.map((hero) => {
//         return <h3 key={hero.name}>{hero.name}</h3>;
//       })}
//     </>
//   );
// };

// /* lecture 11 Success and Error Callbacks */
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// export const RQSuperHeroesPage = () => {
//   const onSuccess = () => {
//     console.log('Perform side effect after data fetching');
//   };

//   const onError = () => {
//     console.log('Perform side effect after encountering error');
//   };
//   const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
//     'super-heroes',
//     fetchHeroes,
//     {
//       onSuccess: onSuccess,
//       onError: onError,
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading || isFetching) {
//     return <h2>... is Loading</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }
//   return (
//     <>
//       <h2>RQ Super Heroes</h2>
//       <button onClick={refetch}>fetch heroes</button>
//       {data?.data.map((hero) => {
//         return <h3 key={hero.name}>{hero.name}</h3>;
//       })}
//     </>
//   );
// };

// // accessing data and error in sideeffects
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes1');
// };

// export const RQSuperHeroesPage = () => {
//   const onSuccess = (data) => {
//     console.log('Perform side effect after data fetching', data);
//   };

//   const onError = (error) => {
//     console.log('Perform side effect after encountering error', error);
//   };
//   const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
//     'super-heroes',
//     fetchHeroes,
//     {
//       onSuccess,
//       onError,
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading || isFetching) {
//     return <h2>... is Loading</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }
//   return (
//     <>
//       <h2>RQ Super Heroes</h2>
//       <button onClick={refetch}>fetch heroes</button>
//       {data?.data.map((hero) => {
//         return <h3 key={hero.name}>{hero.name}</h3>;
//       })}
//     </>
//   );
// };

// /* lecture 12 Data Transformation */
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// export const RQSuperHeroesPage = () => {
//   const onSuccess = (data) => {
//     console.log('Perform side effect after data fetching', data);
//   };

//   const onError = (error) => {
//     console.log('Perform side effect after encountering error', error);
//   };
//   const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
//     'super-heroes',
//     fetchHeroes,
//     {
//       onSuccess,
//       onError,
//       // lecture 12 Data Transformation
//       select: (data) => {
//         const superHeroNames = data.data.map((hero) => hero.name);
//         return superHeroNames;
//       },
//     }
//   );

//   console.log({ isLoading, isFetching });

//   if (isLoading || isFetching) {
//     return <h2>... is Loading</h2>;
//   }

//   if (isError) {
//     return <h2>{error.message}</h2>;
//   }
//   return (
//     <>
//       <h2>RQ Super Heroes</h2>
//       <button onClick={refetch}>fetch heroes</button>
//       {/* {data?.data.map((hero) => {
//         return <h3 key={hero.name}>{hero.name}</h3>;
//       })} */}
//       {data.map((heroName) => {
//         return <h3 key={heroName}>{heroName}</h3>;
//       })}
//     </>
//   );
// };

/* lecture 13 Custom Query Hook */

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = (error) => {
    console.log('Perform side effect after encountering error', error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);
  console.log({
    isLoading,
    isFetching,
  });

  if (isLoading || isFetching) {
    return <h2>... is Loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Super Heroes</h2>
      <button onClick={refetch}>fetch heroes</button>
      {/* {data?.data.map((hero) => {
        return <h3 key={hero.name}>{hero.name}</h3>;
      })} */}
      {data.map((heroName) => {
        return <h3 key={heroName}>{heroName}</h3>;
      })}
    </>
  );
};
