import { useParams } from 'react-router-dom';
import { useSuperHeroData } from '../hooks/useSuperHeroData';

/* lecture 14 Query by id */
export const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, error, isError, data } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h2>... is loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      super hero details: {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};
