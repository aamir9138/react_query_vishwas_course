// /* lecture 3 Fetching Data with useQuery */

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import './App.css';
// import { QueryClientProvider, QueryClient } from 'react-query';
// import { HomePage } from './components/Home.page';
// import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
// import { SuperHeroesPage } from './components/SuperHeroes.page';

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/super-heroes">Traditional Super Heroes</Link>
//               </li>
//               <li>
//                 <Link to="/rq-super-heroes">RQ Super Heroes</Link>
//               </li>
//             </ul>
//           </nav>
//           <Switch>
//             <Route path="/super-heroes">
//               <SuperHeroesPage />
//             </Route>
//             <Route path="/rq-super-heroes">
//               <RQSuperHeroesPage />
//             </Route>
//             <Route path="/">
//               <HomePage />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </QueryClientProvider>
//   );
// }

// export default App;

// /* lecture 5 React Query Devtools */
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import './App.css';
// import { QueryClientProvider, QueryClient } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools'; // import here
// import { HomePage } from './components/Home.page';
// import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
// import { SuperHeroesPage } from './components/SuperHeroes.page';

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/super-heroes">Traditional Super Heroes</Link>
//               </li>
//               <li>
//                 <Link to="/rq-super-heroes">RQ Super Heroes</Link>
//               </li>
//             </ul>
//           </nav>
//           <Switch>
//             <Route path="/super-heroes">
//               <SuperHeroesPage />
//             </Route>
//             <Route path="/rq-super-heroes">
//               <RQSuperHeroesPage />
//             </Route>
//             <Route path="/">
//               <HomePage />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//       <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
//     </QueryClientProvider>
//   );
// }

// export default App;

/* lecture 14 Query by Id */
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // import here
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroPage } from './components/RQSuperHero.page';
import { ParallelQueriesPage } from './components/ParallelQueries.page';

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
            <Route path="/rq-parallel">
              <ParallelQueriesPage />
            </Route>
            <Route path="/rq-super-heroes/:heroId">
              <RQSuperHeroPage />
            </Route>
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
