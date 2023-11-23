import { useState } from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    make: "",
    model: "",
    fuel_type: "",
    drive: "",
    transmission: "",
    year: 1920,
    min_comb_mpg: 10,
    max_comb_mpg: 10,
  });

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="make"
        placeholder="Make (e.g., Audi)"
        onChange={handleChange}
      />
      <input
        name="model"
        placeholder="Model (e.g., A4)"
        onChange={handleChange}
      />
      <input
        name="fuel_type"
        placeholder="Fuel Type (e.g., gas)"
        onChange={handleChange}
      />
      <input
        name="drive"
        placeholder="Drive (e.g., fwd)"
        onChange={handleChange}
      />
      <input
        name="transmission"
        placeholder="Transmission (e.g., automatic)"
        onChange={handleChange}
      />
      <input
        name="year"
        placeholder="Year (e.g., 2020)"
        onChange={handleChange}
        type="number"
      />
      <input
        name="min_comb_mpg"
        placeholder="Min Combined MPG"
        onChange={handleChange}
        type="number"
      />
      <input
        name="max_comb_mpg"
        placeholder="Max Combined MPG"
        onChange={handleChange}
        type="number"
      />

      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
