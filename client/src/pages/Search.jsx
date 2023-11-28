import { useLazyQuery } from '@apollo/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import { QUERY_SEARCH_CARS } from '../utils/queries';

const Search = () => {
  const [executeSearch, { loading, data, error }] = useLazyQuery(QUERY_SEARCH_CARS);

  const handleSearch = (searchParams) => {
    executeSearch({ variables: searchParams });
  };

  return (
    <div>
      <Header />
      <SearchForm onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data && (
        <div>
          {data.searchCars.map((car, index) => (
            <div key={index}>
              <p><strong>Year:</strong> {car.year} - <strong>Make:</strong> {car.make} <strong>Model:</strong> {car.model}</p>
              <p><strong>Fuel Type:</strong> {car.fuel_type}</p>
              <p><strong>Drive:</strong> {car.drive}</p>
              <p><strong>Transmission:</strong> {car.transmission}</p>
              <p><strong>Minimum Combined MPG:</strong> {car.min_comb_mpg}</p>
              <p><strong>Maximum Combined MPG:</strong> {car.max_comb_mpg}</p>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Search;
