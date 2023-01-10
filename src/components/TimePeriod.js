import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ComposerProfile from "./ComposerProfile";
import BaseComposerCard from "./BaseComposerCard";
import PageTransition from "./PageTransition";

const TimePeriod = ({ path, time_period }) => {
  const [data, setData] = useState([]);
  const [composer_data, setComposerData] = useState("");

  useEffect(() => {
    const url = `https://api.openopus.org//composer/list/epoch/${path}.json`;
    fetch(url)
      // fetch("https://api.openopus.org//composer/list/epoch/${id}.json")

      .then((res) => res.json())

      .then((data) => {
        setData(data.composers);
      });
  }, [path]);

  const handleModal = (datos) => {
    setComposerData(datos);
  };

  return (
    <PageTransition>
      <Container>
        <div className="my-5">
          <h1 className="display-2 text-center text-white">{time_period}</h1>

          <Row xs={1} md={3} lg={5} className="g-4">
            {data.map((composer) => (
              <Col key={composer.id}>
                <BaseComposerCard
                  id={composer.id}
                  name={composer.complete_name}
                  epoch={composer.epoch}
                  portrait={composer.portrait}
                  open={handleModal}
                />
              </Col>
            ))}
          </Row>

          <ComposerProfile id={composer_data} />
        </div>
      </Container>
    </PageTransition>
  );
};

export default TimePeriod;
