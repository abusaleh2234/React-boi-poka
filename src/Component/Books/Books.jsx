import { use, useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = ({ booksPromise }) => {
    // const [books, setBooks] = useState([])

    const allBooks = use(booksPromise)
    // useEffect(() => {
    //     fetch("data.json")
    //     .then(res => res.json())
    //     .then(data => setBooks(data))
    // },[])
    // console.log(books);
    console.log(allBooks);

    return (
        <div>
            <h2 className="text-2xl font-bold text-center pb-5">Books</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    allBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;