import React, { useState } from "react";

function BookList({ bookPage, newBook }) {
	const [books, setBooks] = useState([
		{
			id: 1,
			title: "The Great Gatsby",
			author: "F. Scott Fitzgerald",
			publicationDate: "1925",
			availableCopies: 2,
		},
		{
			id: 2,
			title: "To Kill a Mockingbird",
			author: "Harper Lee",
			publicationDate: "1960",
			availableCopies: 3,
		},
		{
			id: 3,
			title: "1984",
			author: "George Orwell",
			publicationDate: "1949",
			availableCopies: 1,
		},
	]);

	const addBook = (book) => {
		setBooks([...books, book]);
	};

	const deleteBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	const editBook = (id, title, author, availableCopies) => {
		setBooks(
			books.map((book) =>
				book.id === id
					? { ...book, title, author, availableCopies }
					: book
			)
		);
	};
	return (
		<ul>
			{newBook ? (
				<button onClick={() => addBook(newBook)}>Add</button>
			) : (
				<>
					{books.map((book) => (
						<li key={book.id}>
							<div>{book.title}</div>
							<div>{book.author}</div>
							<div>{book.publicationDate}</div>
							<div>{book.numCopies}</div>
							{bookPage ? (
								<>
									<button onClick={() => editBook(book.id)}>
										Edit
									</button>
									<button onClick={() => deleteBook(book.id)}>
										Delete
									</button>
								</>
							) : null}
						</li>
					))}
				</>
			)}
		</ul>
	);
}

export default BookList;
