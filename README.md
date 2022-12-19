# react_query_vishwas_course

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
