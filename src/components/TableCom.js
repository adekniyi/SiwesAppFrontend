import React from 'react';
import {TableSixRow,TableSevenRow} from './TableRow'
import '../styles/table-com.css'

function TableCom(props) {

    var cardDetails = [
        {
            Name:"Lucius Emmanuel",
            MatricNo: "22987",
            Section: "Technology",
            Company: "Quomodo Systems",
            Logo: `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/70`,
        },
        {
            Name:"John Anwana",
            MatricNo: "29987",
            Section: "Sales",
            Company: "Initium Finimito",
            Logo: `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/70`
        },
        {
            Name:"Princess Adigun",
            MatricNo: "22980",
            Section: "Real Estate",
            Company: "Melhors",
            Logo: `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/70`
        },
        {
            Name:"Adekunle Niyi",
            MatricNo: "20987",
            Section: "Crypto",
            Company: "Komodo",
            Logo: `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/70`
        }
    ]

    return (
        <div className='table-com-container'>
            {/* <h5>Recent Placements</h5> */}
            <div className='table-com'>
                {
                    cardDetails.map((cardDetail,i)=>
                        <TableSixRow
                        key = {i}
                            name = {cardDetail.Name}
                            matricNo = {cardDetail.MatricNo}
                            section = {cardDetail.Section}
                            company = {cardDetail.Company}
                            logo = {cardDetail.Logo}
                            objkey = {Object.keys(cardDetail)}
                            objvalue = {Object.values(cardDetail)}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default TableCom;