import React from "react";

const Jumbrotron = () => {
    return (
        <>
            <div className="position-relative p-5 text-muted  border-dashed rounded-5 mt-3 mx-4 "style={{ backgroundColor: "#ebebeb" }}>
                <button type="button" className="position-absolute top-0 end-0 p-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                <svg className="bi mt-5 mb-3" width="48" height="48"><use xlinkHref="#check2-circle"></use></svg>
                <h1  style={{ fontSize: "4rem", color: "#000"}}>¡Bienvenidos!</h1>
                <p className="col-lg-6 mb-4">
                Esta web ha sido realizada utilizando React, un framework de JavaScript que estoy aprendiendo en 4GEEKS. Es una web sencilla, pero espero que muestre mis habilidades con este lenguaje de programación.
                </p>
                <button className="btn btn-primary px-5 mb-5" type="button">
                    Llamada a la acción
                </button>
            </div>
        </>
    );
};

export default Jumbrotron;