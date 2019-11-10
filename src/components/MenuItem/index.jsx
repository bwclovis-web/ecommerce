import React from 'react';
import {withRouter} from 'react-router-dom';
import './styles.scss';
 
const MenuItem = ({title, linkUrl, size, history, imageUrl, match}) => {
    return (
        <div className={`${size} menu-item`} tabIndex="0" role="link" onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} ></div>
            <div className="content">
                <h2 className="title">{title.toUpperCase()}</h2>
                <p className="subtitle">SHOP NOW</p>
            </div>
        </div>
    );
}
 
export default withRouter(MenuItem);