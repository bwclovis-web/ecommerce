import React from 'react';
import './styles.scss';
 
const HomePage = () => {
    return (
        <div className='homepage'>
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">HATS</h2>
                        <p className="subtitle">SHOP NOW</p>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">Jackets</h2>
                        <p className="subtitle">SHOP NOW</p>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">SNEEKERS</h2>
                        <p className="subtitle">SHOP NOW</p>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">WOMANS</h2>
                        <p className="subtitle">SHOP NOW</p>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">MENS</h2>
                        <p className="subtitle">SHOP NOW</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default HomePage;