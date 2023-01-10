import Card from "react-bootstrap/Card";

import "../index.css";

const BaseComposerCard = ({ id, name, epoch, portrait, open }) => {
  const handleClick = () => {
    open(id);
  };

  return (
    <Card key={id} style={{ cursor: "pointer" }} onClick={handleClick}>
      <Card.Img variant="top" src={portrait} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default BaseComposerCard;
