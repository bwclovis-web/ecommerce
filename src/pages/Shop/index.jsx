import React, { Component } from 'react';
import SHOP_DATA from '../../Data';

import Preview from '../../components/Preview';
 
class ShopPage extends Component {
    constructor() {
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...collectionProps}) => (
                        <Preview key={id} {...collectionProps}/>
                    ))
                }
            </div>
        );
    }
}
 
export default ShopPage;