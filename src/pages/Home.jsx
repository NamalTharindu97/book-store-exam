import React from "react";
import BookList from "../components/BookList";
import NavBar from "../components/NavBar";

const Home = () => {
	return (
		<div>
			<NavBar />
			Home
			<BookList />
		</div>
	);
};

export default Home;
