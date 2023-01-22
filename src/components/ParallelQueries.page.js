/* lecture 15 Parallel Queries */
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

export const ParallelQueriesPage = () => {
  const fetchHeroes = () => {
    return axios.get(`http://localhost:4000/superheroes`);
  };
  const fetchFriends = () => {
    return axios.get(`http://localhost:4000/friends`);
  };

  const { data: superHeroes } = useQuery('super-heroes', fetchHeroes);
  const { data: friends } = useQuery('friends', fetchFriends);
  return (
    <div>
      <h2>Parallel Queries page</h2>
    </div>
  );
};
