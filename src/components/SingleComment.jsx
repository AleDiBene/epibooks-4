import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  // Funzione per eliminare il commento
  const deleteComment = async (id) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y1MzJkMjgxYjBkZDAwMTUwYTdhZDkiLCJpYXQiOjE3NDQxMjI1NzgsImV4cCI6MTc0NTMzMjE3OH0.6_SkFXXxAqcuKGS1iHFWw7x_7OFYq7jTCaf-4NQOGaw",
          },
        }
      );
      if (response.ok) {
        alert("La recensione è stata eliminata!");
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error.message); // Per rendere più chiaro l'errore
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)} // Passiamo l'id per eliminare il commento
      >
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
