import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    make: "",
    model: "",
    fuel_type: "",
    drive: "",
    transmission: "",
    year: "",
    min_comb_mpg: "",
    max_comb_mpg: "",
  });

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Filter out empty strings and convert numbers
    const filteredParams = Object.entries(searchParams).reduce(
      (acc, [key, value]) => {
        if (value) {
          acc[key] =
            key === "year" || key === "min_comb_mpg" || key === "max_comb_mpg"
              ? parseInt(value, 10)
              : value;
        }
        return acc;
      },
      {}
    );

    onSearch(filteredParams);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        margin: "auto",
      }}
      onSubmit={handleSubmit}
    >
      <input
        style={inputStyle}
        name="make"
        placeholder="Make (e.g., Audi)"
        onChange={handleChange}
      />
      <input
        style={inputStyle}
        name="model"
        placeholder="Model (e.g., A4)"
        onChange={handleChange}
      />
      <input
        style={inputStyle}
        name="fuel_type"
        placeholder="Fuel Type (e.g., gas)"
        onChange={handleChange}
      />
      <input
        style={inputStyle}
        name="drive"
        placeholder="Drive (e.g., fwd)"
        onChange={handleChange}
      />
      <input
        style={inputStyle}
        name="transmission"
        placeholder="Transmission (e.g., automatic)"
        onChange={handleChange}
      />
      <input
        style={inputStyle}
        name="year"
        placeholder="Year (e.g., 2020)"
        onChange={handleChange}
      />
      <input
        style={inputStyle}
        name="min_comb_mpg"
        placeholder="Min Combined MPG"
        onChange={handleChange}
      />
      <input
        style={inputStyle}
        name="max_comb_mpg"
        placeholder="Max Combined MPG"
        onChange={handleChange}
      />

      <button style={buttonStyle} type="submit">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

const inputStyle = {
  margin: "8px 0",
  padding: "8px",
  fontSize: "16px",
};

const buttonStyle = {
  margin: "16px 0",
  padding: "10px",
  fontSize: "16px",
  backgroundColor: "#4CAF50",
  color: "white",
  cursor: "pointer",
};

export default SearchForm;
