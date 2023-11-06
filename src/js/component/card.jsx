import React from "react";
import img from "/workspaces/EduardoHernandezGuzman-Landing-Page-con-React/src/img/imagen.jpg";

const Card = () => {
    return (
        <>
            <div className="card mt-3 mx-4" style={{width: "18rem"}}>
                <img src={"imagen.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
    );
};

export default Card