import BookList from "../components/BookList";
import React from "react";
import NavBar from "../components/NavBar";
import BookForm from "../components/BookForm";

const BookPage = () => {
	return (
		<div>
			<NavBar />
			<h1>Books</h1>
			<BookForm />
			<BookList bookPage="bookPage" />
		</div>
	);
};
export default BookPage;
