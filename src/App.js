import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BookPage from "./pages/BookPage";
import UserPage from "./pages/UserPage";
import BookDetailPage from "./pages/BookDetailPage";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/BookPage" element={<BookPage />} />
					<Route path="/UserPage" element={<UserPage />} />
					<Route
						path="/BookDetailPage"
						element={<BookDetailPage />}
					/>
					<Route
						path="/UserDetailPage"
						element={<UserDetailPage />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
