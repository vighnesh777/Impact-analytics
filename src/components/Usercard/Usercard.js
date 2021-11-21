import React from 'react';
import './Usercard.css'
const Usercard = ({ imageurl, name, id}) => {
    return (
        <div className="user-card">
            <div className="image-container">
                
                    <img src={imageurl} alt='images' className="user-image" />
                
            </div>
            <div className="user-details-container">
                <h2 className="user-heading">User Name :{name}</h2>
                <p className="user-details">User Id :{id}</p>
            </div>
        </div>
    );
};
export default Usercard;