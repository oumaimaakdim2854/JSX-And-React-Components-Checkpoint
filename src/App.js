import React from "react";
import Card from "react-bootstrap/Card";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

function App() {
  const firstName = ""; 

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Card style={{ width: "22rem" }}>
        <Image />
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><Price /></Card.Subtitle>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>

      <div className="mt-3 text-center">
        <p>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</p>
        {firstName && (
          <img
            src="https://via.placeholder.com/100"
            alt="User"
            className="rounded-circle"
          />
        )}
      </div>
    </div>
  );
}

export default App;
