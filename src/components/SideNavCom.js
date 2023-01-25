import React from 'react';
import '../styles/side-nav-com.css';

function SideNavCom(props) {
    return (
        <div className='side-nav-container'>
            <div className='side-meus'>
                <p>Menu</p>
                <div><h3>Dashboard</h3></div>
                <div><h3>Students</h3></div>
                <div><h3>Lecturers</h3></div>
                <div><h3>Idst. Supervisor</h3></div>
                <div><h3>Placements</h3></div>
                <div><h3>Account Settings</h3></div>
            </div>
            
        </div>
    );
}

export default SideNavCom;