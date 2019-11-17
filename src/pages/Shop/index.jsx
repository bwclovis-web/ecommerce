import React, { Component } from 'react';
import CollectionsOverview from '../../components/CollectionsOverview';
 
class ShopPage extends Component {

    render() {
        const {collections} = this.props;
        return (
            <div className="shop-page">
                <CollectionsOverview />
            </div>
        );
    }
}


 
export default ShopPage;