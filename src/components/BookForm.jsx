// BookForm.js
import React, { useState } from "react";
import BookList from "./BookList";

function BookForm({ onSubmit, onCancel, book = null }) {
	const [title, setTitle] = useState(book ? book.title : "");
	const [author, setAuthor] = useState(book ? book.author : "");
	const [publicationDate, setPublicationDate] = useState(
		book ? book.publicationDate : ""
	);
	const [numCopies, setNumCopies] = useState(book ? book.numCopies : "");

	const handleSubmit = (event) => {
		event.preventDefault();

		const newBook = {
			title,
			author,
			publicationDate,
			numCopies,
		};

		if (book) {
			onSubmit(book.id, newBook);
		} else {
			onSubmit(newBook);
		}

		setTitle("");
		setAuthor("");
		setPublicationDate("");
		setNumCopies("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="title">Title:</label>
			<input
				type="text"
				id="title"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
				required
			/>

			<label htmlFor="author">Author:</label>
			<input
				type="text"
				id="author"
				value={author}
				onChange={(event) => setAuthor(event.target.value)}
				required
			/>

			<label htmlFor="publicationDate">Publication Date:</label>
			<input
				type="date"
				id="publicationDate"
				value={publicationDate}
				onChange={(event) => setPublicationDate(event.target.value)}
				required
			/>

			<label htmlFor="numCopies">Number of Copies:</label>
			<input
				type="number"
				id="numCopies"
				value={numCopies}
				onChange={(event) => setNumCopies(event.target.value)}
				required
			/>

			<button type="button" onClick={handleSubmit}>
				Cancel
			</button>
		</form>
	);
}

export default BookForm;
