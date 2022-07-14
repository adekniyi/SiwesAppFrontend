import React from 'react';
import CardCom from './CardCom';
import '../styles/card-com-style.css'
import studentlog from '../images/Vector.png';
import placementlog from '../images/placementlogo.png';
import rejectedlog from '../images/rejectedlogo.png';
import acceptedlog from '../images/acceptedlogo.png';

function CardComCollection() {

    var cardDetails = [
        {
            Detail:"Student",
            TotalNum: 2354,
            MyLogo: studentlog,
            BackgroundColor: "card-com-student-logo"
        },
        {
            Detail:"Placement",
            TotalNum: 409,
            MyLogo: placementlog,
            BackgroundColor: "card-com-placement-logo"
        },
        {
            Detail:"Rejected",
            TotalNum: 235,
            MyLogo: rejectedlog,
            BackgroundColor: "card-com-rejected-logo"
        },
        {
            Detail:"Accepeted",
            TotalNum: 54,
            MyLogo: acceptedlog,
            BackgroundColor: "card-com-accepted-logo"
        }
    ]
    return (
        <div className='card-com-collection'>
            {
                cardDetails.map((mycard,i)=>
                    <CardCom   
                    key={i}   
                    designtype = "floa"             
                    logo = {mycard.MyLogo}
                    detail = {mycard.Detail}
                    totalNum = {mycard.TotalNum}
                    backgroundcolor = {mycard.BackgroundColor}
                    />
                )
            }
           
        </div>
    );
}

export default CardComCollection;