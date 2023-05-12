import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<ul
				className="nav"
				style={{
					textDecoration: "none",
					listStyle: "none",
					display: "flex",
					flexDirection: "row",
					gap: 20,
				}}
			>
				<Link to="/">
					<li>home</li>
				</Link>

				<Link to="/BookPage">
					<li>BookPage</li>
				</Link>
				<Link to="/BookDetailPage">
					<li>BookDetailPage</li>
				</Link>
				<Link to="/UserPage">
					<li>UserPage</li>
				</Link>
				<Link to="/UserDetailPage">
					<li>UserDetailPage</li>
				</Link>
			</ul>
			;
		</div>
	);
};

export default NavBar;
