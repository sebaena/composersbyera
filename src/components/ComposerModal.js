import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const ComposerModal = (props) => {
  const birth = props.data.composer.birth.split("-");

  const death = props.data.composer.death
    ? props.data.composer.death.split("-")
    : [" "];

  return (
    <Modal
      className="my-modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="btn-close-white " closeButton>
        <Modal.Title id="contained-modal-title-vcenter " className="my-titles">
          {props.data.composer.complete_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card
          text="white"
          className="text-center my-card"
          style={{ width: "20rem" }}
        >
          <Card.Img variant="top" src={props.data.composer.portrait} />
          <Card.Body>
            {}
            <Card.Title>
              {birth[0]} - {death[0]}
            </Card.Title>
          </Card.Body>
        </Card>

        <h4 className="my-titles">List of Works</h4>
        <ListGroup variant="flush" className="menu-item">
          {props.data.works.map((work, index) => {
            return <ListGroup.Item key={index}>{work.title}</ListGroup.Item>;
          })}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ComposerModal;
