import { useLazyQuery, useMutation } from '@apollo/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import { QUERY_SEARCH_CARS } from '../utils/queries';
import {CREATE_CAR} from '../utils/mutations';

const Search = () => {
  const [executeSearch, { loading, data, error }] = useLazyQuery(QUERY_SEARCH_CARS);
  const [saveCar, { loading: savingCar, error: saveError }] = useMutation(CREATE_CAR);


  const handleSearch = (searchParams) => {
    executeSearch({ variables: searchParams });
  };

  const handleSaveCar = async (car) => {
    try {
      await saveCar({ variables: { ...car } });

    } catch (error) {
      console.error('Error saving car:', error.message);
    }
  };

  return (
    <div>
      <Header />
      <SearchForm onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {savingCar && <p>Saving car...</p>}
      {saveError && <p>Error saving car: {saveError.message}</p>}

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
              <button onClick={() => handleSaveCar(car)}>Save to Profile</button>
           
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Search;
