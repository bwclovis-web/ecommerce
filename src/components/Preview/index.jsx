import React from 'react';
import './styles.scss';

import CollectionItem from '../CollectionItem';
 
const Preview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <div className="preview">
                {
                    items.filter((item, i) => i < 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
}
 
export default Preview;