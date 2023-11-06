import React from "react";
import Nav from "./nav.jsx"
import Jumbrotron from "./jumbrotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<>
			<Nav></Nav>
			<Jumbrotron></Jumbrotron>
			
			
				<div class="row">
					<div class="col-3">
					<Card></Card>
					</div>
					<div class="col-3">
					<Card></Card>
					</div>
					<div class="col-3">
					<Card></Card>
					</div>
					<div class="col-3">
					<Card></Card>
					</div>
				</div>
			<Footer></Footer>
			
		</>
	);
};

export default Home;
