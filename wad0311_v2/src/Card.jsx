import React from "react";

function Card(props) {
    return (<div>
        <h2>{ props.name }</h2>
        <img src={ props.img } alt='random'/>
        <h2>{ props.favoriteNumber }</h2>
        <h2>{ props.mail }</h2>
    </div>);
}

export default Card;