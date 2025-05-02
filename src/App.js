// src/App.js
import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image"; // Import component, not path

const firstName = "Rodgers";

function App() {
  return (
    <Container className="py-5 d-flex flex-column align-items-center">
      <Card style={{ width: "22rem", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <Card.Body className="text-center">
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-4 text-center">
        <h5>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h5>
      </div>
    </Container>
  );
}

export default App;
