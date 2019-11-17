import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopData} from '../../redux/shop/shop.selectors'

import Preview from '../Preview';

import './styles.scss';
 
const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...collectionProps}) => (
                    <Preview key={id} {...collectionProps}/>
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopData
})
 
export default connect(mapStateToProps)(CollectionsOverview);