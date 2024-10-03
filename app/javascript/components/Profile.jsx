import React from "react";
import { Card, CardHeader, CardBody, Avatar, Button } from "@nextui-org/react";

const Profile = () => {
  return (
    <div style={{ paddingTop: "3rem", paddingBottom: "20rem" }}>
      <h4 id="profile-name">Andrew Santellan</h4>
      <h4 id="profile-title">Product Manager, Binance</h4>
      <div className="inline-stack flex-center">
        <img
          src={`/images/Binance.svg`}
          style={{
            filter: "grayscale(100%)",
            opacity: "0.6",
          }}
        />
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
      <div className="flex flex-center" style={{ marginTop: "5rem" }}>
        <Card id="card-style">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="/images/user.png"
              />
            </div>
          </CardHeader>
          <CardBody className="flex flex-center">
            <p style={{color: "white", marginBottom: "1.5rem", textAlign: "center", fontSize: "1.1rem"}}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <img src="/images/star.svg"/>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
