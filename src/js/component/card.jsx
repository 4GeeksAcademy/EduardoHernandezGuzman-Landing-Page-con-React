import React from "react";


const Card = (props) => {
    return (
        <>
            <div className="card mt-4 mx-4" style={{width: "18rem"}}>
                <img src={props.cardImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.cardTitle}</h5>
                        <p className="card-text">{props.cardText}</p>
                        <a href="#" className="btn btn-primary">Enlaza con algo</a>
                    </div>
            </div>
        </>
    );
};

export default Card