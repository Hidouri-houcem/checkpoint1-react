import React from "react";
import { Card, Button } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description  />
          <Button variant="primary">Acheter maintenant</Button>
        </Card.Body>
      </Card>

    </div>
  );
};

export default App;
