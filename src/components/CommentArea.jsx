import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  // Gestione dello stato per i commenti, caricamento ed errori
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Effetto che viene eseguito ogni volta che asin cambia
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y1MzJkMjgxYjBkZDAwMTUwYTdhZDkiLCJpYXQiOjE3NDQxMjI1NzgsImV4cCI6MTc0NTMzMjE3OH0.6_SkFXXxAqcuKGS1iHFWw7x_7OFYq7jTCaf-4NQOGaw",
            },
          }
        );
        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    // Esegui il fetch quando asin cambia
    fetchComments();
  }, [asin]); // Il useEffect si attiva ogni volta che asin cambia

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
