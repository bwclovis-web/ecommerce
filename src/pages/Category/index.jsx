import React from 'react';
import {connect} from 'react-redux';
import {selectedCollectionItem} from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/CollectionItem';

import './styles.scss';
 
const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
        <div className='collection-page'>
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectedCollectionItem(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);