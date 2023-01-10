import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Composers = (props) => {
  return (
    <Container>
      <h1 className="display-2 text-center text-white">Great Composers</h1>

      <Row xs={1} md={5} className="g-4">
        {data.map((character) => (
          <Col sm={4}>
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => setModalShow(true)}
            >
              <Card.Img variant="top" src={character.portrait} />
              <Card.Body>
                <Card.Title>{character.complete_name}</Card.Title>
                <Card.Text>{character.epoch}</Card.Text>
                <Button variant="dark" onClick={() => setModalShow(true)}>
                  More Infosss
                </Button>

                {/* <Button variant="primary" href={"https://api.openopus.org///work/list/composer/129/genre/Popular.json"} target="_blank">
                    More Info
                  </Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ComposerModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default Composers;
