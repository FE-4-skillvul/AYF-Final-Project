import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardContent() {
  return (
    <Card style={{ width: "18rem" }} className="card-content">
      <Card.Img variant="top" src="../img/woilah.jpg" />
      <Card.Body>
        <Card.Title>Damar Ganteng</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Detail Post</Button>
      </Card.Body>
    </Card>
  );
}

export default CardContent;
