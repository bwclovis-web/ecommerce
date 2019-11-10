import React from 'react';
import './styles.scss';
 
const MenuItem = ({title, image, size}) => {
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{backgroundImage: `url(${image})`}} ></div>
            <div className="content">
                <h2 className="title">{title.toUpperCase()}</h2>
                <p className="subtitle">SHOP NOW</p>
            </div>
        </div>
    );
}
 
export default MenuItem;