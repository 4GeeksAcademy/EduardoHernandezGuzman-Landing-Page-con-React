import React from "react";
import Nav from "./nav.jsx"
import Jumbrotron from "./jumbrotron.jsx";


//create your first component
const Home = () => {
	return (
		<>
			<Nav></Nav>
			<Jumbrotron></Jumbrotron>
		</>
	);
};

export default Home;
