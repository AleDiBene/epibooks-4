import { Card } from "react-bootstrap";

function SingleBook(props) {
  const handleSelect = () => {
    props.changeSelectedBook(props.book.asin);
  };

  return (
    <Card
      onClick={handleSelect}
      style={{
        border:
          props.selectedBook === props.book.asin ? "3px solid red" : "none",
      }}
    >
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
