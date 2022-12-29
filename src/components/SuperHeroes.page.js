// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export const SuperHeroesPage = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:4000/superheroes').then((res) => {
//       setData(res.data);
//       setIsLoading(false);
//     });
//   }, []);

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <>
//       <h2>Super Heroes Page</h2>
//       {data.map((hero) => {
//         return <div>{hero.name}</div>;
//       })}
//     </>
//   );
// };

// // lecture 4 Handling Query Error
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export const SuperHeroesPage = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios
//       .get('http://localhost:4000/superheroe111')
//       .then((res) => {
//         setData(res.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setIsLoading(false);
//       });
//   }, []);

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <>
//       <h2>Super Heroes Page</h2>
//       {data.map((hero) => {
//         return <div>{hero.name}</div>;
//       })}
//     </>
//   );
// };

/* lecture 6 Query Cache */
import { useState, useEffect } from 'react';
import axios from 'axios';

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/superheroes')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
