import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Compare = () => {
  return (
    <div>
      <Header />
      <div
        className="main-content"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div
          style={{
            maxWidth: "400px",
            margin: "20px",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Car 1</h3>
        </div>

        <div
          style={{
            maxWidth: "400px",
            margin: "20px",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Car 2</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Compare;
