import React from 'react';

export function TableSixRow(props) {
    let arr = Array.apply(null, {length: 10}).map(Number.call, Number);
    const img = `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/70`;

    return (
        <>
        <div className='table-com-row'>
            <div>
            <img src={img} loading="lazy" alt="Avartar"/>
            </div>
            <div>
                <h5>Name</h5>
                <p>{props.name}</p>
            </div> 
            <div>
                <h5>Matric No</h5>
                <p>{props.matricNo}</p>
            </div>
            <div>
                <h5>Section</h5>
                <p>{props.section}</p>
            </div>
            <div>
                <h5>Company</h5>
                <p>{props.company}</p>
            </div>
            <div>
                ...
            </div>
        </div>
     
        </>
    );
}

export function TableSevenRow(props) {
    let arr = Array.apply(null, {length: 10}).map(Number.call, Number);
    const img = `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/70`;

    return (
        <>
        <div className='table-com-row'>
            <div>
            <img src={img} loading="lazy" alt="Avartar"/>
            </div>
            <div>
                <h5>Name</h5>
                <p>Lucius Emmanuel</p>
            </div> 
            <div>
                <h5>Matric No</h5>
                <p>21987</p>
            </div>
            <div>
                <h5>Section</h5>
                <p>Technology</p>
            </div>
            <div>
                <h5>Company</h5>
                <p>QSL</p>
            </div>
            <div>
                <h5>Department</h5>
                <p>Science</p>
            </div>
            <div>
                ...
            </div>
        </div>
     
        </>
    );
}

export function TableFiveRow(props) {
    let arr = Array.apply(null, {length: 10}).map(Number.call, Number);
    const img = `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/70`;

    return (
        <>
        <div className='table-com-row'>
            <div>
            <img src={img} loading="lazy" alt="Avartar"/>
            </div>
            <div>
                <h5>Name</h5>
                <p>Lucius Emmanuel</p>
            </div> 
            <div>
                <h5>Matric No</h5>
                <p>21987</p>
            </div>
            <div>
                <h5>Section</h5>
                <p>Technology</p>
            </div>
            <div>
                ...
            </div>
        </div>
     
        </>
    );
}



//export default TableRow;