import React from 'react';


function CardCom(props) {
    return (
        <div className= {`${props.backgroundcolor} card-component ${props.designtype === "float" ? "card-component2-row" : "card-component-col" }`}>
        <div className='card-com-img'>
            <img src = {props.logo} alt="student logo"/>
        </div>
        <div className='card-com-detail'>
            <h2>{props.detail}</h2>
            <h3>{props.totalNum}</h3>
        </div>
    </div>
    );
}

export default CardCom;