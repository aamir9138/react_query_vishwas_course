# Getting Started with React-Query

## lecture 1 Introduction

### React Query

- what is React Query
- A library for fetching data in a React application

### Why React Query

1. Since React is a UI library, there is no specific pattern for data fetching
2. we use `useEffect` hook for data fetching and `useState` hook to maintain component state like loading, error or resulting data
3. if the data is need throughout the app, we tend to use state management libraries
4. most of the state management libraries are good for working with client state. for example theme for the application / whether a modal is open
5. state management libraries are not great for working with `asynchronous or server state`

## Client vs Server state

### Client State

- client state is persisted in your app memory and accessing or updating it is synchronous

### Server State

1. persisted remotely and requires asynchronous APIs for fetching or updating
2. has shared ownership
3. Data can be updated by someone else without your knowledge
4. UI data may not be in sync with the remote data
5. Challenging when you have to deal with `caching`, `deduping multiple request for the same data`, `updating stale data in the background`, `performance optimizations` etc

## lecture 2 Project Setup

1. new react project using create react app
2. set up an API endpoint that serves mock data for use in our application
3. set up react router and a few routes in the application
4. fetch data the traditional way using useEffect and useState

### new react project

`npx create-react-app react_query_demo`

### Setup API endpoints

- we will use JSON server for this purpose
- JSON server not only support `GET` request but also `POST` request which we will need in this series

1. install json-server

```
npm install json-server
```

2. create a file `db.json` in the root folder which will serve as an API data

```
{
  "superheroes": [
    {
      "id": 1,
      "name": "Batman",
      "alterEgo": "Bruce Wayne"
    },
    {
      "id": 2,
      "name": "Superman",
      "alterEgo": "Clark Kent"
    },
    {
      "id": 3,
      "name": "Wonder Woman",
      "alterEgo": "Princess Diana"
    }
  ]
}
```

3. to serve this data on an endpoint we need to add an `npm script` in `package.json` file
4. in the `scripts` we need to add one line

```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "serve-json": "json-server --watch db.json --port 4000" // add this line
  },
```

5. go to terminal and write

```
npm run serve-json
```

6. we can see the data from `db.json` on localhost:4000/superheroes

### setup react router and a few routes

1. install react-router-dom

```
npm install react-router-dom
```

2. to setup a few routes. create a `component folder` inside `src` and create 3 files inside

- Home.page.js
- RQSuperHeroes.page.js
- SuperHeroes.page.js

3. in these files we will fetch data in the upcoming videos.
4. replace App.js with this code

```
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/super-heroes'>
            <SuperHeroesPage />
          </Route>
          <Route path='/rq-super-heroes'>
            <RQSuperHeroesPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
```

5. in App.css add this code

```
nav ul {
  display: flex;
  background-color: blanchedalmond;
  margin-block-start: 0;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

nav ul li {
  list-style-type: none;
  margin-right: 16px;
}
```

6. in `SuperHeroes.page.js` component use the below code

```
import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then(res => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map(hero => {
        return <div>{hero.name}</div>
      })}
    </>
  )
}
```

7. the router used is working in this version ` "react-router-dom": "^5.2.0",`. change it to this if you have recent one in `package.json` file

## lecture 3 Fetching Data with useQuery (react-query version 3.19.2)

1. install react-querty using `npm install react-query@3.19.2`
2. in `App.js` component import 2 components `QueryClientProvider` and `QueryClient` from `react-query`

```
import {QueryClientProvider, QueryClient} from 'react-query'
```

3. in the `App.js` wrap the router inside `QueryClientProvider` component
4. create an instance of `QueryClient()` as `const queryClient = new QueryClient()`
5. finally provide a prop on `QueryClientProvider` as `client={queryClient}`. The full App.js code is now

```
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
```

### using useQuery in RQSuperHeroes component for fetching data

1. import `useQuery` from `react-query`

```
import {useQuery} from 'react-query'
```

2. import axios.
3. in the component body we will use `useQuery` hook.
4. useQuery accepts 2 parameters.

- first is a unique key which can be any name here we give `super-heroes`
- second parameter is a function which will return a Promise. we will use `axios.get()` to return a Promise.

5. so the `useQuery` hook will process it an return many different things which we can receive in a variable for example `const result`

```
// lecture 3 fetching data with useQuery
import axios from "axios";
import { useQuery } from "react-query";

export const RQSuperHeroesPage = () => {
  const result = useQuery('super-heroes', () => {
    return axios.get('http://localhost:4000/superheroes')
  })
  return <div>RQSuperHeroesPage</div>;
};
```

6. we can further destructure the `result` and get what we need from it like below

```
// lecture 3 fetching data with useQuery
import axios from 'axios';
import { useQuery } from 'react-query';

export const RQSuperHeroesPage = () => {
  // const result = useQuery('super-heroes', () => {
  // we can destructure  the result
  const { isLoading, data } = useQuery('super-heroes', () => {
    return axios.get('http://localhost:4000/superheroes');
  });

  if (isLoading) {
    return <h2>... is Loading</h2>;
  }
  return (
    <>
      {data?.data.map((hero) => {
        return <h3 key={hero.name}>{hero.name}</h3>;
      })}
    </>
  );
};
```

7. we can define the fetcher function outside of the `useQuery` hook

```
// fetcher function outside
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const RQSuperHeroesPage = () => {
  // const result = useQuery('super-heroes', () => {
  // we can destructure  the result
  const { isLoading, data } = useQuery('super-heroes', fetchHeroes);

  if (isLoading) {
    return <h2>... is Loading</h2>;
  }
  return (
    <>
      {data?.data.map((hero) => {
        return <h3 key={hero.name}>{hero.name}</h3>;
      })}
    </>
  );
};
```

## lecture 4 Handling Query Error

### Traditional way

1. first we will see the traditional way of error handling in `SuperHeroes.page.js` component.
2. the url is intentionally wrong to see the error
3. so we need one more `useState` for error handling in traditional way and a catch block of code.

```
// lecture 4 Handling Query Error
import { useState, useEffect } from 'react';
import axios from 'axios';

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/superheroe111')
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
        return <div>{hero.name}</div>;
      })}
    </>
  );
};
```

### Error handling using useQuery()

1. from `useQuery()` output we can destructure `isError` and `error` also. which we can than use to handle the error and return another JSX.
2. in this case the loading text will show for a little longer because `react-query` attempts multiple tries to fetch the data and if the endpoint is not correct at the end it will throw an error

```
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
```

## lecture 5 React Query Devtools

- React Query Devtools will save hours of debugging code time.

1. step one import `ReactQueryDevtools` in `App.js` component from `react-query/devtools`
2. step two use the `ReactQueryDevtools` component just before the closing `QueryClientProvider` tag
3. step three set a prop `initialIsOpen={false}` as we don't want it to open by default.
4. step four add another prop `position='bottom-right'`

```
/* lecture 5 React Query Devtools */
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // import here
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
```

- when we open the react query devtools. the 2 important thing are `Query Explorer` which gives the state of the react query settings. and `Data explorer` which are the things we try to see in the network tab upon inspection.

## lecture 6 Query Cache

- shortcut for `empty cache and hard reload in browser = Hold down Ctrl and click the Reload button`
- the devtool will not show any query.
- first start the json server by writing `npm run serve-json` in the terminal.
- change the throttle on `network tab` to `fast 3G` to observe things

### Traditional super heroes

- so now observe every time we change the tabs like from `Home` to `Traditional Super Heroes` on the network tab we will see a new request. as in picture. and in browser we will see each time the `loading` text and than list of heroes

![traditional super heroes each time request](./pictures/traditional_super_heroes_eachtime_request.PNG)

### React Query super heroes

- so now observe every time we change the tabs like from `Home` to `RQ Super Heroes` on the network tab we will see a new request. as in picture. and in browser we will not see the `loading` text. This is because of caching.
  also I observe that for traditional on each press 2 `xhr` request were made but with `React Query` on each click 1 `xhr` request is made.

![react query each time request](./pictures/RQ_super_heroes_eachtime_request.PNG)

- we don't see the loading text this is because of the `Query Cache` that `React Query` provides. by default every query result is cached for 5 minutes. and react query relies on that cache for subsequent request.

- how this happend? so actually the `isLoading` value on first click will set to `true` when data is fetched it is set to `false`. on the subsequent click the `isLoading` value will not change to `true`.

- However react query knows that the server data might have changed and the cached might not contain the latest data. so a background `refetch` is triggered for the same query and when the refetch is successful the new data is updated in the UI. since our data is the same as our cache data we don't see any change in our UI.

- you may be wondering if `isLoading` is not changed, does `useQuery` provide another boolean flag to indicate the `background refetching` of the query. the answer is yes and the flag is call `isFetching`.

- let us log both `isLoading` and `isFetching` to the console to track the network activity.
- empty cache and reload. on first click of `RQ super Heroes` we can see at the console. `isLoading` is set to true and then change to `false` after fetching data. for `isFetching` it is the same.

![first click RQ super heroes](./pictures/first_click_RQsuperhero.PNG)

- on the second click we see that `isLoading` remains `false` but the `isFetching` first becomes `true` after fetching the data in the background than change to `false`. this means that at loading time the UI will not stale when the data is fetched in the background than it will render on the screen. which leads to better user experience

### Caching time

- default value is 5 minutes
- but we can change it but providing a third argument to the useQuery

```
{
  cacheTime: 5000 // 5sec
}
```

```
/* lecture 6 Query Cache */
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchHeroes,
    {
      cacheTime: 5000, // 5sec
    }
  );

  console.log({ isLoading, isFetching });

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
```

- in the react Dev Tools we can see that when we click `RQ super heroes`. the Devtool will have 1 observer. as we change to `Home` tab. after 5 sec the query will be garbage collected.

![five second observer](./pictures/single_observer_five_second.PNG)
![garbage collected](./pictures/garbage_collected.PNG)

## lecture 7 Stale Time

- another use of query cache is to reduce the number of network requests for data that doesn't necessarily change too often.
- for example let say our list of users doesn't change too often and it is ok for our user to see the `stale data` for a while. in such cases we can use the cached query results without having to refetch it in the background. to achieve this behaviour we configure another property called stale time.
- the default `staleTime` is 0 sec. set the staleTime to 30 sec.

```
/* lecture 7 Stale Time */
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchHeroes,
    {
      staleTime: 30000,
    }
  );

  console.log({ isLoading, isFetching });

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
```

- so if we see now in the Devtools. when we click `RQ super heroes` the query will remain `fresh` for the 30 sec stale time. during this 30 sec if we go to other tabs and come again no background `isFetching` will occur. so at the console you will notice isFetching `false` during this 30sec time. and the user will see the stale data.
