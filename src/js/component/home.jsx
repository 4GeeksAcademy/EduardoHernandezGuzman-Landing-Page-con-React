import React from "react";
import Nav from "./nav.jsx"
import Jumbrotron from "./jumbrotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";





const Home = () => {
	return (
		<>
			<Nav></Nav>
			<Jumbrotron></Jumbrotron>
			
			
				<div class="row">
					<div class="col-3">
					<Card cardTitle="Tarjeta uno" cardText="Este es un texto de prueba. No te lo tomes en serio, o te arrepentirás." cardImage="./src/img/i001.jpg"></Card>
					</div>
					<div class="col-3">
					<Card cardTitle="Tarjeta dos" cardText="Pronto se publicará más información. O no. Depende de nuestro humor."></Card>
					</div>
					<div class="col-3">
					<Card cardTitle="Tarjeta tres" cardText="Esto es solo un borrador. O no. Depende de nuestra pereza."></Card>
					</div>
					<div class="col-3">
					<Card cardTitle="Tarjeta cuatro" cardText="Estamos trabajando en ello. Pero no muy duro." ></Card>
					</div>
				</div>
			<Footer></Footer>
			
		</>
	);
};

export default Home;
