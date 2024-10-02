import React from "react";

const Profile = () => {
  return (
    <div style={{ paddingTop: "3rem", paddingBottom: "20rem" }}>
      <h4 id="profile-name">Andrew Santellan</h4>
      <h4 id="profile-title">Product Manager, Binance</h4>
      <div className="inline-stack flex-center">
        <img src={`/images/Binance.svg`} />
        <h4
          className="hero-text clients-h4"
          style={{
            fontSize: "1.5rem",
            color: "gray",
            marginInline: "1rem",
          }}
        >
          Binance
        </h4>
      </div>
    </div>
  );
};

export default Profile;
