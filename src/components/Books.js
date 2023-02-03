import { useEffect, useState } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import bookService from "../services/bookService";

function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        bookService
            .getAll()
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <h2>List of Books</h2>
            <ListGroup>
                {books.map((book) => {
                    return (
                        <ListGroupItem key={book._id}>
                            {book.title} by {book.author}
                            {"  "}
                            <Badge pill color="warning">
                                {book.reviews.length}
                            </Badge>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
        </>
    );
}
export default Books;
