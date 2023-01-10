import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../index.css";

const BaseCard = ({ name, img_path, page_path, time, years }) => {
  const navigate = useNavigate();

  return (
    <Card style={{ cursor: "pointer" }} onClick={() => navigate(page_path)}>
      <Card.Img variant="top" src={img_path} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{time}</Card.Text>
        <Card.Text>{years}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BaseCard;
