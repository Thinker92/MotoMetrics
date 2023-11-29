import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  const userData = {
    username: "Placeholder",
    email: "test@example.com",
  };

  return (
    <div>
      <Header />
      <div
        style={{
          textAlign: "center",
          maxWidth: "400px",
          margin: "20px auto",
        }}
      >
        <h2 style={{ color: "#fff" }}>Your Information</h2>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>User Details</h3>
          <div
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            <p>
              <strong>Username:</strong> {userData.username}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
